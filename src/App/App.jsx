import React,{useState} from 'react'
import './App.css';
import Button from './components/ui/Button/Button';




function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      demat breizh
      {/* <Button  text="Texte du boutton" /> */}
      <Button 
        bgColor="tomato" 
        type= 'submit'
        title= '+1'
        onButtonClick={(unTruc)=>{ console.log(unTruc)
          
          setcounter(counter+1);
          console.log(counter);

        ; }}
       
      >
        <>
          +1
        
        </>
      </Button >
      <Button
        type='submit'
        title= '-1'
        onButtonClick={(unTruc)=>{ console.log(unTruc)
        
          setcounter(counter-1);
          console.log(counter);
        ; }}
      >
        -1
      </Button>
    </div>
  );
}

export default App;
