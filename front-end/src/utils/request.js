const BASE_URL = process.env.REACT_APP_API_SERVER;

const handleResult = async (result) => {
  const json = await result.json();
  if (!result.ok) {
    throw new Error('error occurred');
  }

  return json;
};

export async function get(path, query, options = {}) {
  // const requestUri = compactJoin([getApiUrl(url), query], '');
  const url = BASE_URL + path;

  const result = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  return await handleResult(result);
}


export async function post(path, data, options = {}){
  const url = BASE_URL + path;

  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });

  return handleResult(result);
}

export async function put(path, data, options = {}) {
  const url = BASE_URL + path;

  const result = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });

  return handleResult(result);
}

export async function remove(path, data, options = {}) {
  const url = BASE_URL + path;

  const result = await fetch(url, {
    method: 'DELETE',
    ...options,
    headers: {
      ...options.headers,
    },
  });

  return handleResult(result);
}

const Request = {
  get,
  post,
  put,
  delete: remove,
};

export default Request;
