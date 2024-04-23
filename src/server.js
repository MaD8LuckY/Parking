const getHeaders = () => {
  let header = {
    'Content-Type': 'application/json; ',
  };

  return header;
};

const getHeadersToken = (token) => {
  let header = {
    'Content-Type': 'application/json; ',
    'Authorization': 'Bearer ' + token
  };

  return header;
};

export const apiPost = async (url, params = {}) => {
  const headers = getHeaders();
  console.log(
    'POST Url: ',
    `${url}`,
    'Тело запроса: ',
    JSON.stringify(params),
    'headers: ',
    headers,
  );

  let data = await fetch(`${url}`, {
    method: 'POST',
    credentials: 'omit',
    headers: headers,
    body: JSON.stringify(params),
  })


  let dataJson = await data.json();

  return (dataJson || 'false');
};

export const apiPostToken = async (url, params = {}, token) => {
  const headers = getHeadersToken(token);
  console.log(
    'POST Url: ',
    `${url}`,
    'Тело запроса: ',
    JSON.stringify(params),
    'headers: ',
    headers,
  );

  let data = await fetch(`${url}`, {
    method: 'POST',
    credentials: 'omit',
    headers: headers,
    body: JSON.stringify(params),
  })

  let dataJson = await data.json();

  return (dataJson || false);
};