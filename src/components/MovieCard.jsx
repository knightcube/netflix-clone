import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, id, movieItem }) => {
  const navigate = useNavigate();

  const handlePosterClick = () => {
    console.log("Poster Clicked");
    navigate("/movies/" + movieItem.original_title + "/" + id);
  };

  return (
    <div className="w-48 pr-2">
      <img
        className="cursor-pointer"
        src={IMG_CDN + posterPath}
        alt="Image Poster"
        onClick={handlePosterClick}
      />
    </div>
  );
};

export default MovieCard;
