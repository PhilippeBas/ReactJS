import React from 'react'
import './App.css';

import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import NavBar from './components/ui/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Button from './components/ui/Button/Button';
import MemeThumbnail from './pages/MemeThumbnail/MemeThumbnail';
import MemeEditor from './pages/MemeEditor/MemeEditor';

function App(props) {
 
  
  return (

    <FlexH3Grow>
      <Header />
      <Button></Button>
      <NavBar />
      {/* {JSON.stringify(meme)} */}

      
      <FlexW1Grow>
        <Routes>
          
          <Route path='/' element={'Home welcom'}/>
          <Route path='/thumbnail' element={ <MemeThumbnail /> }/>
          <Route path='/meme' element={<MemeEditor/>}
          />
        </Routes>


       
      </FlexW1Grow> 
      <Footer />
    </FlexH3Grow>

  );
}

export default App;
