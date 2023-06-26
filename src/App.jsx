import './style.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';



function App() {

  let cards = data.map(function(item){
    return(
      <Card 
        item = {item}
      />
    )
  })

  return (
    <div className="App">
        <Header />
        <div className="container">
          <div className='cards'>
            {cards}
          </div>
        </div>
    </div>
  );
}

export default App;
