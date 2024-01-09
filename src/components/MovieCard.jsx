import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-2">
      <img src={IMG_CDN+posterPath} alt="Image Poster" />
    </div>
  );
};

export default MovieCard;
