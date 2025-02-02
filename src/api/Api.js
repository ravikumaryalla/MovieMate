import axios from "axios";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default movieApi;
