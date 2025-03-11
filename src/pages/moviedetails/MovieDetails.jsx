/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchMovies from "../../hooks/useFetchMovies";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const { fetchMovies, data: movie, loading, error } = useFetchMovies(); // Extract fetch function and data from hook

  useEffect(() => {
    fetchMovies({ category: id, getList: false }); // Fetch movie details when `id` changes
  }, [id]); // Dependency array ensures it runs when `id` changes

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        Loading...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Failed to load movie details. Try again later.
      </div>
    );
  }

  // If movie data is still null, return nothing
  if (!movie || Object.keys(movie).length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        No data available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#262e35] overflow-y-auto">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster Section */}
          <div className="w-full md:w-auto shrink-0">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-xl w-full md:w-[300px] object-cover shadow-lg"
              />
            ) : (
              <div className="w-full md:w-[300px] h-[450px] bg-slate-700 rounded-xl flex items-center justify-center">
                <span className="text-slate-400">No poster available</span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 max-w-3xl">
            <div className="space-y-6">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {movie.title}
              </h1>

              {/* Overview */}
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {movie.overview}
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-3">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-sm text-slate-400 border border-[#7e868d] rounded-lg px-3 py-1"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Movie Info */}
              <div className="space-y-4">
                <InfoRow label="Runtime" value={`${movie.runtime} mins`} />
                <InfoRow
                  label="Budget"
                  value={
                    movie.budget ? `$${formatCurrency(movie.budget)}` : "N/A"
                  }
                />
                <InfoRow
                  label="Revenue"
                  value={
                    movie.revenue ? `$${formatCurrency(movie.revenue)}` : "N/A"
                  }
                />
                <InfoRow label="IMDB Code" value={movie.imdb_id || "N/A"} />
                <InfoRow label="Status" value={movie.status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// InfoRow Component
const InfoRow = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <span className="text-base font-bold text-slate-100">{label}:</span>
    <span className="text-base text-slate-400">{value}</span>
  </div>
);

// Currency Formatter Function
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default MovieDetails;
