/* eslint-disable react/prop-types */
import MovieCard from "../moviecard/MovieCard";
import movieApi from "../../api/Api";
import { useEffect, useState } from "react";

const MovieList = ({ categeory }) => {
  console.log(categeory);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await movieApi.get(`/movie/${categeory}`);
        setMovies(data.results); // Store movie data in state
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [categeory]);

  return (
    <div className="flex  gap-[1rem] flex-wrap  py-[2rem] justify-center bg-[#262e35]">
      {movies?.map((movie, id) => (
        <MovieCard data={movie} key={id} />
      ))}
    </div>
  );
};

export default MovieList;
