import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "../button/Button";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <Button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            Remove
          </Button>
        </>
      )}
    </div>
  );
};
