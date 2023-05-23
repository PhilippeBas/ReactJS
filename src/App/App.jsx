import React, { useState } from 'react'
import './App.css';

import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import {MemeSVGViewer ,emptyMeme} from 'orsys-tjs-meme'
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import NavBar from './components/ui/NavBar/NavBar';


function App(props) {
  const [meme, setmeme] = useState(emptyMeme);
  return (

  <FlexH3Grow>
    <Header />
    <NavBar />
    {JSON.stringify(meme)}
    <FlexW1Grow>
        <MemeSVGViewer meme={meme} image={undefined} basePath=''/>
        <MemeForm meme={meme} onMemeChange={(meme)=>{
          setmeme(meme)
        }}/>
    </FlexW1Grow>
    <Footer/>
  </FlexH3Grow>

  );
}

export default App;
