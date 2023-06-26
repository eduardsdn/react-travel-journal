import './style.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container">
          <div className='cards'>
            <Card />
          </div>
        </div>
    </div>
  );
}

export default App;
