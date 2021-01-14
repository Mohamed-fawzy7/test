import logo from './logo.svg';
import './App.css';
import DiceApp from './DiceApp';
import Lottery from './Lottery';
import CoinFlipper from './CoinFlipper';

function App() {
  return (
    <div className="App">
        {/* <DiceApp /> */}
        {/* <Lottery />
        <Lottery title="mini daily" numBalls={4} maxNum={10}/> */}
        <CoinFlipper />
    </div> 
  );
}

export default App;
