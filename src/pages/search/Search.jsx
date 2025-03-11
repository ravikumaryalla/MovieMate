import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchMovies from "../../hooks/useFetchMovies";
import MovieCard from "../../components/moviecard/MovieCard";
import PageNotFound from "../pagenotfound/PageNotFound";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { movies, fetchMovies, loading, error } = useFetchMovies();
  const [searched, setSearched] = useState(false); // Track if a search has been performed

  useEffect(() => {
    if (query) {
      fetchMovies({ category: query, search: true, getList: true });
      setSearched(true);
    }
  }, [query]); // Runs when query changes

  return (
    <div className="min-h-screen p-4 bg-[#262e35]">
      {loading && <p className="text-white text-center">Loading...</p>}
      {error && (
        <p className="text-red-500 text-center">Error fetching movies</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 py-4 justify-center">
          {movies?.length > 0 ? (
            movies.map((movie) => <MovieCard data={movie} key={movie.id} />)
          ) : searched ? (
            <PageNotFound />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Search;
