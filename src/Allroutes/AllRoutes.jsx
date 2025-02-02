import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Popular from "../pages/popular/Popular";
import TopRated from "../components/toprated/TopRated";
import Search from "../pages/search/Search";
import MovieDetails from "../pages/moviedetails/MovieDetails";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import Header from "../components/header/Header";
import MovieList from "../components/movielist/MovieList";

const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList categeory={"now_playing"} />} />
        <Route
          path="/upcoming"
          element={<MovieList categeory={"upcoming"} />}
        />
        <Route path="/popular" element={<MovieList categeory={"popular"} />} />
        <Route
          path="/toprated"
          element={<MovieList categeory={"top_rated"} />}
        />

        <Route path="/search" element={<Search />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
