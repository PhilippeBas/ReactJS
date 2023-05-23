import React from 'react'
import './App.css';

import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import {MemeSVGViewer ,emptyMeme} from 'orsys-tjs-meme'
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import NavBar from './components/ui/NavBar/NavBar';





function App(props) {
  
  return (

  <FlexH3Grow>
    <Header />
    <NavBar />
    <FlexW1Grow>
        <MemeSVGViewer meme={emptyMeme} image={undefined}/>
        <MemeForm/>
    </FlexW1Grow>
    <Footer/>
  </FlexH3Grow>

  );
}

export default App;
