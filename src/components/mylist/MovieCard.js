import React from "react";
import { Link } from "react-router-dom";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({type, movie}) => {

  console.log(movie)

  return (
    <div className="">
      <div className="overlay"></div>

      <Link to={'/movie/' + `${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
        <p>{movie.title}</p>
      </Link>
      <MovieControls type={type} movie={movie} />
    </div>
  );
};
