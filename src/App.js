import Card from './Components/Card/Card.jsx';

import avengers from './images/avengers.jpg';
import shangchi from './images/shangchi.jpg';
import spiderman from './images/spiderman.jpg';
import topgun from './images/topgun.jpg';

function App() {
  return (
    <>
      <div className='card-section'>
        <div className='container'>
          <div className='card-wrapper'>
            <Card 
              imgSrc = {shangchi}
              availability = "Available now"
              imgTitle = "Shang-chi"
              movLink = "https://www.marvel.com/movies/shang-chi-and-the-legend-of-the-ten-rings"
            />
            <Card 
              imgSrc = {avengers}
              availability = "Available now"
              imgTitle = "Avengers"
              movLink = "https://www.imdb.com/title/tt4154796/"
            />
            <Card 
              imgSrc = {spiderman}
              availability = "Coming soon"
              imgTitle = "Spider-man"
              movLink = "https://www.marvel.com/movies/spider-man-no-way-home"
            />
            <Card 
              imgSrc = {topgun}
              availability = "Available now"
              imgTitle = "Top Gun"
              movLink = "https://www.imdb.com/title/tt1745960/"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
