import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-24 text-white w-full">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                id={movie.id}
                movieItem={movie}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
