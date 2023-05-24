import React from 'react'
import StoreMemeForm from '../../components/functionnal/MemeForm/StoreMemeForm';
import {useSelector} from 'react-redux'
import { MemeSVGViewer } from 'orsys-tjs-meme';

function MemeEditor(props) {
    

  return (
    <>
        <MemeViewer/>
        <StoreMemeForm  />
    </>
  )
}

function MemeViewer(){
    const memeCurrent = useSelector(s=>s.current);
    const image = useSelector(s=>s.listes.images.find(img => img.id === memeCurrent.imageId));
    return <MemeSVGViewer meme={memeCurrent} image={image} basePath='' />
}

MemeEditor.propTypes = {}

export default MemeEditor
