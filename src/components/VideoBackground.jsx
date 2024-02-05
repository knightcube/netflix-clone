import { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "./../hooks/useMovieTrailer";
import { IMG_CDN } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&iv_load_policy=3&controls=0&loop=1&playlist=${trailer?.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
      {/* <img className="h-screen object-cover" src={IMG_CDN + posterPath} alt="Image Poster" /> */}
      {/* <img className="w-screen" src={LOGO} alt="" /> */}
    </div>
  );
};

export default VideoBackground;
