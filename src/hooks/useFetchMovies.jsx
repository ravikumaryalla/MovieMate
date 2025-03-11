// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import movieApi from "../api/Api";

// const useFetchMovies = ({
//   categeory,
//   getList = true,
//   search = false,
//   page = 1,
// }) => {
//   const [movies, setMovies] = useState([]);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     async function getMovies() {
//       try {
//         const { data } = search
//           ? await movieApi.get(`/search/movie`, {
//               params: { query: categeory },
//             })
//           : await movieApi.get(`/movie/${categeory}`, {
//               params: {
//                 page: page,
//               },
//             });

//         setMovies(getList ? data?.results : data); // Store movie data in state
//         setData(data);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     //api.themoviedb.org/3/search/movie?api_key=e268622fedb12e24eecb408b18e84127&query=Inception

//     getMovies();
//   }, [categeory]);

//   return {
//     movies: movies,
//     data: data,
//   };
// };

// export default useFetchMovies;

import { useState } from "react";
import movieApi from "../api/Api";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch movies
  const fetchMovies = async ({
    category,
    getList = true,
    search = false,
    page = 1,
  }) => {
    // console.log(category, "category");
    setLoading(true);
    setError(null);

    try {
      const response = search
        ? await movieApi.get(`/search/movie`, { params: { query: category } })
        : await movieApi.get(`/movie/${category}`, { params: { page } });

      setMovies(getList ? response.data?.results : response.data);
      setData(response.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return { movies, data, fetchMovies, loading, error };
};

export default useFetchMovies;
