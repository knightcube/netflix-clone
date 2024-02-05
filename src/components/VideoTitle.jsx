import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-screen pt-[80%] md:pt-[30%] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="md:w-1/4 py-6 text-lg">{overview}</p>
      <button className="p-4 px-12 bg-white text-black rounded-sm hover:bg-opacity-80">
        Play
      </button>
      <button className="mt-2 md:ml-2 p-4 px-12 bg-gray-500 text-white bg-opacity-50 rounded-sm">
        More Info
      </button>
    </div>
  );
};
// w-screen aspect-video
export default VideoTitle;
