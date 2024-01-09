import { useEffect } from "react";
import { useSelector } from 'react-redux';
import useMovieTrailer from './../hooks/useMovieTrailer';
import { LOGO } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId)
  return (
    <div className="sm:pt-0 pt-16">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&iv_load_policy=3`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
      {/* <img className="w-screen" src={LOGO} alt="" /> */}
    </div>
  );
};

export default VideoBackground;
