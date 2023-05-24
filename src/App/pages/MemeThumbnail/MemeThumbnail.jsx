import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer, emptyMeme, MemeSVGThumbnail } from 'orsys-tjs-meme';
import {connect,useSelector,useDispatch} from 'react-redux'

function MemeThumbnail() {
  const memes=useSelector(s=>s.listes.memes)
  const images=useSelector(s=>s.listes.images)
  return (
    <MemeSVGThumbnail memes={memes} images={images} basePath=''/>
  )
}
export default MemeThumbnail

