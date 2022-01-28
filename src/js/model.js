import { API_URL, API_AUTH_URL } from './config';
import { AJAX, generateRandomId, setCookie } from './helper';

export const state = {
  title: '',
  dates: [],
  type: '',
  imgURL: '',
  description: ''
};

export let events = [];

export const getAllEvents = async function () {
  try {
    const data = await AJAX(`${API_URL}events`);
    events = [...data];
  } catch (err) {
    console.error(err);
    throw err;
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

export async function setCookieToken(email, passwd) {
  const fetchPro = await fetch(`${API_AUTH_URL}auth/login`, {
    method: 'GET',
    headers: { Authorization: 'Basic ' + btoa(`${email}:${passwd}`) }
  });
  const tokenObj = await fetchPro.json();
  setCookie(
    `token=${tokenObj.access_token}; max-age=604800; path=/; SameSite=Lax;`
  );
}

setCookieToken('b@email.com', 'A@2qwerty');
