/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[300px] rounded-[1rem] border-[1px] border-[#7e868d] p-[0.5rem] flex-col justify-center align-center">
      <img
        src={`https://image.tmdb.org/t/p/w342${data?.poster_path}?`}
        alt="movie-card"
        className="rounded-[1rem]"
      />
      <h1>{data?.title}</h1>
      <p className="w-full h-[5.1rem] overflow-hidden overflow-ellipsis text-[0.7rem]">
        {data?.overview}
      </p>
    </div>
  );
};

export default MovieCard;
