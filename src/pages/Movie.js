import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  //Use url parameters
  const params = useParams();
  //   console.log(params);

  const movie = getMovie(parseInt(params.movieId));
  //   console.log(movie);

  //Use Query String
  const location = useLocation();
  //   console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = log(searchParams.get("detail"));

  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
    console.log(detail);
  };
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director : {movie.director}</p>
      <p>Category : {movie.category}</p>
      <button type="button" onClick={handleClick}>
        Detail
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : " "}
    </div>
  );
};

export default Movie;
