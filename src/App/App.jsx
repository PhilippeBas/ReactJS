import React, { useEffect, useState } from 'react'
import './App.css';

import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import { MemeSVGViewer, emptyMeme, MemeSVGThumbnail } from 'orsys-tjs-meme';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import NavBar from './components/ui/NavBar/NavBar';


function App(props) {
  const [meme, setmeme] = useState(emptyMeme);
  const [imgs, setimgs] = useState([]);
  const [memes,setmemes] = useState([]);

  useEffect(() => {
    const prImg=fetch('http://localhost:5679/images')
     .then(r => r.json())
      
      const prMeme=fetch('http://localhost:5679/memes')
      .then(r => r.json())

      Promise.all([prImg,prMeme]).then(arr=>{
        setimgs(arr[0]);
        setmemes(arr[1]);
      })
       
  }, [])
  return (

    <FlexH3Grow>
      <Header />
      <NavBar />
      {/* {JSON.stringify(meme)} */}

      <MemeSVGThumbnail memes={memes} images={imgs} basePath=''/>

      {/* <FlexW1Grow>
        <MemeSVGViewer meme={meme} image={imgs.find((img, pos) => img.id === meme.imageId)} basePath='' />
        <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
          setmeme(meme)
        }} />
      </FlexW1Grow> */}
      <Footer />
    </FlexH3Grow>

  );
}

export default App;
