import { useSearchParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovies";
import MovieCard from "../../components/moviecard/MovieCard";
import PageNotFound from "../pagenotfound/PageNotFound";
const Search = () => {
  const [searchParams] = useSearchParams();
  const categeory = `${searchParams.get("query")}`;
  const data = useFetchMovies({ categeory, getList: false, search: true });
  const movies = data?.results;
  return (
    <div className="flex  gap-[1rem] flex-wrap  py-[2rem] justify-center  ">
      {movies?.map((movie, id) => (
        <MovieCard data={movie} key={id} />
      ))}

      {movies?.length === 0 ? <PageNotFound /> : null}
    </div>
  );
};

export default Search;
