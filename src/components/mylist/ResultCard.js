import React, { useContext } from "react";
import Moment from 'react-moment'
import { category } from "../../api/tmdbApi";
import { GlobalContext } from "../context/GlobalState";
import Button from "../button/Button";

export const ResultCard = (props) => {

  const movie = props.movie
  const {
    addMovieToWatchlist,
    watchlist,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  return (
    <div className="result-card">
      <div className="info">
        <div className="controls">
          <Button
            className="small_min"
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </Button>
        </div>
      </div>
    </div>
  );
};
