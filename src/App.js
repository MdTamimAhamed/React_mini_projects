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
            />
            <Card 
              imgSrc = {avengers}
              availability = "Available now"
              imgTitle = "Avengers"
            />
            <Card 
              imgSrc = {spiderman}
              availability = "Coming soon"
              imgTitle = "Spider-man"
            />
            <Card 
              imgSrc = {topgun}
              availability = "Available now"
              imgTitle = "Top Gun"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
