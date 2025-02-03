import movies from "../../components/moviecard/temp";
import MovieList from "../../components/movielist/MovieList";
const Home = () => {
  return (
    <div className="bg-[#262e35]">
      <MovieList results={movies.results} />
    </div>
  );
};

export default Home;
