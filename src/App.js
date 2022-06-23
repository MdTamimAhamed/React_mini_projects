import Card from './Components/Card/Card.jsx';
import CardData from './Components/Card/CardData';

function App() {
  return (
    <>
      <div className='card-section'>
        <div className='container'>
          <div className='card-wrapper'>
            {CardData.map(function movies(value){
                return (
                  <Card
                    imgSrc={value.imgSrc}
                    availability={value.availability}
                    imgTitle={value.imgTitle}
                    movLink={value.movLink}
                  />
                );
            })};
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
