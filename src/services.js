const url = "https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties";

export const getProperties = async (endpoint, id) => {
  const response = await fetch(url + endpoint + `/${id}`);
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    return response.statusText;
  }
};
