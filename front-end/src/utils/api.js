const base_url = process.env.REACT_APP_API_SERVER;

export const room_post = async (name, location, capacity) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      location: location,
      capacity: capacity,
    }),
  };

  return await fetch(base_url + "/room", requestOptions)
    .then(async (response) => {
      const text = await response.text();
      const data = JSON.parse(text);
      return data;
    })
    .catch((err) => {
      throw err;
    });
};
