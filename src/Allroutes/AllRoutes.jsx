import { Routes, Route } from "react-router-dom";

import Search from "../pages/search/Search";
import MovieDetails from "../pages/moviedetails/MovieDetails";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import Header from "../components/header/Header";
import MovieList from "../components/movielist/MovieList";

const AllRoutes = () => {
  return (
    <div className="App  bg-[#262e35]">
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
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
