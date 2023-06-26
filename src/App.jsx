import './style.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='cards'>
          <Card />
        </div>
    </div>
  );
}

export default App;
