import { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "./../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="sm:pt-0 pt-16">
      <iframe
        className="w-full h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&iv_load_policy=3&controls=0&loop=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
      {/* <img className="w-screen" src={LOGO} alt="" /> */}
    </div>
  );
};

export default VideoBackground;
