import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  return (
    movies && (
      <div className="  bg-black">
        <div className="-mt-72 relative z-20 pb-4">
          <MovieList title={"Now Playing"} movies={movies}></MovieList>
          <MovieList title={"Trending"} movies={movies}></MovieList>
          <MovieList title={"Upcoming"} movies={movies}></MovieList>
          <MovieList title={"Popular"} movies={movies}></MovieList>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
