// `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CS_KEY}&imgSize=large&searchType=image&q=salah`
const baseURL = `https://www.googleapis.com/customsearch/v1`;

const API_KEY = process.env.REACT_APP_API_KEY;
const CS_KEY = process.env.REACT_APP_CS_KEY;

export const options = (query, type) => {
  const options = {
    method: "GET",
    url: baseURL,
    params: {
      q: query,
      key: API_KEY,
      cx: CS_KEY,
      searchType: type,
    },
  };
  return options;
};
