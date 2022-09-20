import CountdownTimer from './components/Countdown';


function App() {
  return (
    <div className="App">
      <CountdownTimer date={new Date("09.22.2022")}></CountdownTimer>
    </div>
  );
}

export default App;