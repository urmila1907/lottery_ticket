import './App.css';
import MainLottoBall from "./Components/MainLottoBall.jsx"

function App() {
  return (
    <div className="App">
        <div className='main-ball'>
          <div className='main-text'> Main Game</div>
          <MainLottoBall num={6}/>
        </div>
        <div className='mini-ball'>
        <div className='mini-text'> Mini Game</div>
          <MainLottoBall num={4}/>
        </div>
    </div>
  );
}

export default App;
