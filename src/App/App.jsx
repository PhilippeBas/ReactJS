import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/ui/Button/Button';


function App() {
  return (
    <div className="App">
      demat breizh
      {/* <Button  text="Texte du boutton" /> */}
      <Button onButtonClick={(unTruc)=>{
          console.log(unTruc);
      }}>
        <>
          <div>Text du boutton</div>
          <div>Du</div>
          <div>Boutton</div>
        
        </>
      </Button>
    </div>
  );
}

export default App;
