import React from 'react'
import Button from './components/ui/Button/Button';



function App() {
  return (
    <div className="App">
      demat breizh
      {/* <Button  text="Texte du boutton" /> */}
      <Button 
        bgColor="tomato" 
        type= 'submit'
        title= '+1'
        onButtonClick={(unTruc)=>{ console.log(unTruc); }}
       
      >
        <>
          +1
        
        </>
      </Button >
      <Button
        type='submit'
        title= '-1'
        onButtonClick={(unTruc)=>{ console.log(unTruc); }}
      >
        -1
      </Button>
    </div>
  );
}

export default App;
