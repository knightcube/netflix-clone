import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

  return (
    nowPlayingmovies && (
      <div className="bg-black">
        <div className="relative z-10 pb-4">
          <MovieList
            title={"Now Playing"}
            movies={nowPlayingmovies}
          ></MovieList>
          <MovieList title={"Popular"} movies={topRatedMovies}></MovieList>
          <MovieList title={"Upcoming"} movies={upcomingMovies}></MovieList>
        
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
