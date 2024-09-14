import './App.css';
import MainLottoBall from "./Components/MainLottoBall.jsx"

function App() {
  return (
    <div className="App">
        <div className='main-ball'>
          <MainLottoBall num={6}/>
        </div>
        <div className='mini-ball'>
          <MainLottoBall num={4}/>
        </div>
    </div>
  );
}

export default App;
