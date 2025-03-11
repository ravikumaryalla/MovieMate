import MovieCard from "../moviecard/MovieCard";
import useFetchMovies from "../../hooks/useFetchMovies";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";

const MovieList = ({ categeory }) => {
  const [page, setPage] = useState(1);
  const { movies, data, fetchMovies } = useFetchMovies(); // Fetch movies from API

  useEffect(() => {
    const loadMovies = async () => {
      await fetchMovies({ category: categeory, page });
    };
    loadMovies();
    window.scrollTo({ top: 0 }); // Smooth scroll to top
  }, [categeory, page]); // ✅ Runs when category or page changes

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Grid Layout for Movie Cards */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  gap-6 py-8 px-4 w-full max-w-7xl">
        {movies?.map((movie) => (
          <MovieCard data={movie} key={movie.id} />
        ))}
      </div>

      {/* Pagination Section */}
      {data?.total_pages > 1 && (
        <div className="flex justify-center w-full pb-6">
          <Pagination
            count={data.total_pages} // ✅ Dynamic total pages
            page={page}
            onChange={handlePageChange}
            sx={{
              "& .MuiPaginationItem-root": { color: "white" },
              "& .Mui-selected": {
                backgroundColor: "white !important",
                color: "black !important",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MovieList;
