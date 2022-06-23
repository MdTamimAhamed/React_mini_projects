import Card from './Components/Card/Card.jsx';
import CardData from './Components/Card/CardData';

function App() {
  return (
    <>
      <div className='card-header'>
        <div className='container'>
            <h1 className='list-title'>Movie Cards </h1>
        </div>
      </div>
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
            })};
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
