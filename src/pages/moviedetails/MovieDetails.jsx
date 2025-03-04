/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const categeory = `${id}`;
  const movies = useFetchMovies({ categeory, getList: false });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#262e35] overflow-y-auto">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster Section */}
          <div className="w-full md:w-auto shrink-0">
            {movies?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt={movies?.title}
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
                {movies?.title}
              </h1>

              {/* Overview */}
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {movies?.overview}
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-3">
                {movies?.genres?.map((genre) => (
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
                <InfoRow label="Runtime" value={`${movies?.runtime} mins`} />
                <InfoRow
                  label="Budget"
                  value={
                    movies?.budget ? `$${formatCurrency(movies.budget)}` : "N/A"
                  }
                />
                <InfoRow
                  label="Revenue"
                  value={
                    movies?.revenue
                      ? `$${formatCurrency(movies.revenue)}`
                      : "N/A"
                  }
                />
                <InfoRow label="IMDB Code" value={movies?.imdb_id || "N/A"} />
                <InfoRow label="Status" value={movies?.status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <span className="text-base font-bold text-slate-100">{label}:</span>
    <span className="text-base text-slate-400">{value}</span>
  </div>
);

export default MovieDetails;
