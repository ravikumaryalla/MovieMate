/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom";
import { movie } from "../../assets";
const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/moviedetails/${data?.id}`);
  };
  return (
    <div
      className="w-[300px] rounded-[0.6rem] border-[1px] border-[#7e868d] p-[0.5rem] flex-col justify-center align-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center w-full">
        <img
          src={
            data?.poster_path
              ? `https://image.tmdb.org/t/p/w185${data?.poster_path}?`
              : movie
          }
          alt="movie-card"
          className="rounded-[0.6rem]"
        />
      </div>
      <h1>{data?.title}</h1>
      <p className="w-full h-[5.1rem] overflow-hidden overflow-ellipsis text-[0.7rem]">
        {data?.overview}
      </p>
    </div>
  );
};

export default MovieCard;
