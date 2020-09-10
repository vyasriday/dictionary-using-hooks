const http = {
  get: ({ url }) =>
    fetch(url, {
      method: 'GET',
    }).then((response) => response.json()),

  post: ({ url, body }) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  put: ({ url, body }) =>
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then((response) => response.json()),
};

export default http;
