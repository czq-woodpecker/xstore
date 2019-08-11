export const BASE_URL = 'http://localhost:8080/api';
export const BASE_STATIC_URL = 'http://localhost:8080';

export function getData(url) {
  return fetch(url);
}

export function deleteData(url) {
  return fetch(url, {method: 'DELETE'})
}

export function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
