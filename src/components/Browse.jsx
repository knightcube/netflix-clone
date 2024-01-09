import useNowPlayingMovies from '../hooks/useNowPlayingMoves';
import Header from './Header';
import MainContainer from './MainContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {/* 
          - MainContainer
            - VideoBackground
            - VideoTitle
          - SecondaryContainer
      */}
      <MainContainer/>
     
    </div>
  )
}

export default Browse