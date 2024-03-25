const getHeaders = () => {
  let header = {
    'Content-Type': 'application/json; ',
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

  return (dataJson || false);
};

export const apiGet = async (url, params = {}) => {
  const headers = await getHeaders();
  console.log(
    'GET Url: ',
    `${url}`,
    'Тело запроса: ',
    params,
    'headers: ',
    headers,
  );

  const data = await fetch(`${url}`, {
    method: "GET",
    headers: headers,
    mode: "cors",
    cache: "default",
  })
  let dataJson = await data.json();
  return (dataJson || false);
};