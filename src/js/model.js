import { API_URL } from './config';
import { AJAX, generateRandomId } from './helper';

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

// const createEventObject = function (data) {
//   const { event } = data;
//   return {
//     title: event.title,
//     author: event.author,
//     group: event.group,
//     dates: [...event.dates],
//     type: event.type,
//     duration: event.duration,
//     price: event.price,
//     artists: { ...event.artists },
//     imgURL: event.imgURL,
//     videoURL: event.videoURL,
//     description: event.description
//   };
// };

const createEventObject = function (data) {
  const { event } = data;
  return {
    id: generateRandomId(1, 999_999),
    title: event.title,
    dates: [...event.dates],
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
    AJAX(`${API_URL}events/${eventId}`, eventData, 'PATCH');
  } catch (err) {
    console.error(err);
    throw error;
  }
}

export async function deleteEvent(eventId) {
  try {
    AJAX(`${API_URL}events/${eventId}`, _, 'DELETE');
  } catch (err) {
    console.error(err);
    throw error;
  }
}
