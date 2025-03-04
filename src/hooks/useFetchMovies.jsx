/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import movieApi from "../api/Api";

const useFetchMovies = ({ categeory, getList = true, search = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = search
          ? await movieApi.get(`/search/movie`, {
              params: { query: categeory },
            })
          : await movieApi.get(`/movie/${categeory}`);

        setMovies(getList ? data?.results : data); // Store movie data in state
      } catch (error) {
        console.error(error);
      }
    }
    //api.themoviedb.org/3/search/movie?api_key=e268622fedb12e24eecb408b18e84127&query=Inception

    https: getMovies();
  }, [categeory]);

  return movies;
};

export default useFetchMovies;
