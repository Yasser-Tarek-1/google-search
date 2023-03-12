const baseURL = "https://google-search-2.p.rapidapi.com";
const KEY = process.env.RAPID_API_Key;

export const options = (type, search) => {
  const options = {
    method: "GET",
    url: `${baseURL}/${type}`,
    params: {
      query: search,
      num: "10",
      gl: "us",
      hl: "en",
      page: "0",
      nfpr: "0",
      device: "desktop",
    },
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": "google-search-2.p.rapidapi.com",
    },
  };
  return options;
};
