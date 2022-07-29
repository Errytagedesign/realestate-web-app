import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "78bf95013fmsh55c60620a15fb9dp10fddcjsn6f4b315f827c",
    },
  });

  return data;
};
