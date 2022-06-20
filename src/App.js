import Card from './Components/Card/Card.jsx';

import avengers from './images/avengers.jpg';
import shangchi from './images/shangchi.jpg';
import spiderman from './images/spiderman.jpg';

function App() {
  return (
    <>
      <div className='container'>
        <div className='card-wrapper'>
          <Card 
            imgSrc = {shangchi}
            mov_time = "10:30"
            imgTitle = "Shangchi"
          />
          <Card 
            imgSrc = {avengers}
            mov_time = "11:30"
            imgTitle = "Avengers"
          />
          <Card 
            imgSrc = {spiderman}
            mov_time = "09:30"
            imgTitle = "Spiner-man"
          />
        </div>
      </div>
    </>
  );
}

export default App;
