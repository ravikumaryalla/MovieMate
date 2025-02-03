/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import movieApi from "../api/Api";

const useFetchMovies = ({ categeory }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await movieApi.get(`/movie/${categeory}`);
        console.log(data.results);
        setMovies(data.results); // Store movie data in state
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [categeory]);

  return movies;
};

export default useFetchMovies;
