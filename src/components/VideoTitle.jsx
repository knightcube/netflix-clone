import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white  bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 py-6 text-lg'>{overview}</p>
        <button className='p-4 px-12 bg-white text-black rounded-sm hover:bg-opacity-80'>Play</button>
        <button className='ml-2 p-4 px-12 bg-gray-500 text-white bg-opacity-50 rounded-sm'>More Info</button>
    </div>
  )
}

export default VideoTitle