import { API_URL } from './config';
import { AJAX } from './helper';

export const state = {
  title: '',
  author: '',
  group: '',
  dates: [],
  type: '',
  duration: 0,
  price: 0,
  artists: {},
  imgURL: '',
  videoURL: '',
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

const createEventObject = function (data) {
  const { event } = data;
  return {
    title: event.title,
    author: event.author,
    group: event.group,
    dates: [...event.dates],
    type: event.type,
    duration: event.duration,
    price: event.price,
    artists: { ...event.artists },
    imgURL: event.imgURL,
    videoURL: event.videoURL,
    description: event.description
  };
};

// export async function loadEvent() {
//   try {
//     const data = await AJAX(`${API_URL}events`);
//     state = createEventObject(data);
//   } catch (err) {
//     console.error(err);
//     throw error;
//   }
// }
