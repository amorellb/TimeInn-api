import { API_URL, API_AUTH_URL } from './config';
import { AJAX, generateRandomId, setCookie } from './helper';

export const state = {
  id: '',
  title: '',
  author: '',
  dates: [],
  type: '',
  duration: '',
  price: '',
  imgURL: '',
  videoURL: '',
  description: ''
};

export let events = [];
export let news = [];

export const getAllEvents = async function () {
  try {
    const data = await AJAX(`${API_URL}events`);
    events = [...data];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getEvent = async function (id) {
  try {
    const fetchPro = await fetch(`${API_URL}events/${id}`);
    const event = await fetchPro.json();
    state.id = event.id;
    state.title = event.title;
    state.author = event.author;
    state.duration = event.duration;
    state.price = event.price;
    state.dates = [...event.dates];
    state.type = event.type;
    state.imgURL = event.imgURL;
    state.videoURL = event.videoURL;
    state.description = event.description;
    return state;
  } catch (err) {
    console.error(err);
  }
};

const createEventObject = function (event) {
  return {
    id: generateRandomId(1, 999_999),
    title: event.title,
    dates: [event.dates],
    type: event.type,
    imgURL: event.imgURL,
    description: event.description
  };
};

export async function uploadEvent(eventData) {
  try {
    const eventObj = createEventObject(eventData);
    AJAX(`${API_URL}events`, eventObj);
  } catch (err) {
    console.error(err);
    throw error;
  }
}

export async function editEvent(eventId, eventData) {
  try {
    const eventObj = createEventObject(eventData);
    AJAX(`${API_URL}events/${eventId}`, eventObj, 'PATCH');
  } catch (err) {
    console.error(err);
    throw error;
  }
}

export async function deleteEvent(eventId) {
  try {
    AJAX(`${API_URL}events/${eventId}`, '', 'DELETE');
  } catch (err) {
    console.error(err);
    throw error;
  }
}

const createUserObject = function (user) {
  return {
    email: user.email,
    password: user.password
  };
};

export async function setCookieToken(email, passwd) {
  try {
    const fetchPro = await fetch(`${API_AUTH_URL}auth/login`, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + btoa(`${email}:${passwd}`) }
    });
    const tokenObj = await fetchPro.json();
    setCookie(
      `token=${tokenObj.access_token}; max-age=604800; path=/; SameSite=Lax;`
    );
  } catch (err) {
    console.error(err);
  }
}

export async function registerUser(user) {
  try {
    const userObj = createUserObject(user);
    fetch(`${API_AUTH_URL}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getNews(token) {
  try {
    const fetchPro = await fetch(`${API_AUTH_URL}news`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    data = await fetchPro.json();
    if (!fetchPro.ok) throw new Error(`${data.message} (${fetchPro.status})`);
    news = [...data];
    return news;
  } catch (err) {
    console.error(err);
  }
}

// original img URL: https://www.liceubarcelona.cat/sites/default/files/front_web_winterreise.jpg
export async function getEventImg(id) {
  try {
    const imgURL = fetch(`${API_URL}events/${id}`)
      .then(res => res.json())
      .then(event => event.imgURL)
      .then(imgURL =>
        fetch(imgURL)
          .then(res => res.blob())
          .then(img => URL.createObjectURL(img))
      );
    return imgURL;
  } catch (err) {
    console.error(err);
  }
}
