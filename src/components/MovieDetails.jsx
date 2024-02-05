import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import MainContainer from "./MainContainer";
import VideoBackground from "./VideoBackground";

const MovieDetails = () => {
  let { title, id } = useParams();
  useMovieTrailer(id);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const [overview, setOverview] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetailsData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        API_OPTIONS
      );

      const movieDetailsJSON = await movieDetailsData.json();
      console.log(movieDetailsJSON.overview);
      setOverview(movieDetailsJSON.overview);
    };

    getMovieDetails();
  }, []);

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MovieDetails;
