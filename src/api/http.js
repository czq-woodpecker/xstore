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
