import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';

function App() {
  return (
    <div className="App">
      demat breizh
      <MemeSVGViewer meme={emptyMeme} image={undefined}/>
    </div>
  );
}

export default App;
