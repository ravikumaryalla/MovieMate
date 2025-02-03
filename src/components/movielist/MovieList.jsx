/* eslint-disable react/prop-types */
import MovieCard from "../moviecard/MovieCard";
import useFetchMovies from "../../hooks/useFetchMovies";

const MovieList = ({ categeory }) => {
  const movies = useFetchMovies({ categeory });
  return (
    <div className="flex  gap-[1rem] flex-wrap  py-[2rem] justify-center bg-[#262e35]">
      {movies?.map((movie, id) => (
        <MovieCard data={movie} key={id} />
      ))}
    </div>
  );
};

export default MovieList;
