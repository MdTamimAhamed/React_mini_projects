import Card from './Components/Card/Card.jsx';
import CardData from './Components/Card/CardData';
import Heading from './Components/Heading/Heading.jsx';
import Clock from './Components/Clock/Clock';

function App() {
  return (
    <>
      {/* Card Section*/}
      <Heading  
        sectionTitle = "Movie Cards Practice"
      />
      <div className='card-section'>
        <div className='container'>
          <div className='card-wrapper'>
            {CardData.map((value) =>{
                return (
                  <Card
                    key = {value.id}
                    imgSrc={value.imgSrc}
                    availability={value.availability}
                    imgTitle={value.imgTitle}
                    movLink={value.movLink}
                  />
                );
            })}
          </div>
        </div>
      </div>

      {/* Clock Section*/}
        <Heading  
          sectionTitle = "Digital Clock Practice"
        />
        <div className='clock-section'>
          <div className='container'>
              <div className='clock-wrapper'>
                <Clock />
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
