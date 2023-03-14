const baseURL = "https://google-search-2.p.rapidapi.com";
const KEY = process.env.REACT_APP_RAPID_API_Key;

export const options = (type, query) => {
  const options = {
    method: "GET",
    url: `${baseURL}/${type}`,
    params: {
      query,
      num: "40",
    },
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": "google-search-2.p.rapidapi.com",
    },
  };
  return options;
};
