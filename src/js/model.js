import { API_URL } from './config';
import { AJAX } from './helper';

export async function getData() {
  const data = await AJAX(`${API_URL}events`);

  return data;
}
