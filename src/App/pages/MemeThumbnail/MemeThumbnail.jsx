import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer, emptyMeme, MemeSVGThumbnail } from 'orsys-tjs-meme';
import MemeForm from './components/functionnal/MemeForm/MemeForm';

function MemeThumbnail(props) {
  return (
    <>
        <MemeSVGViewer meme={meme} image={imgs.find((img, pos) => img.id === meme.imageId)} basePath='' />
        <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
        setmeme(meme)
        }} />
    </>
  )
}

MemeThumbnail.propTypes = {}

export default MemeThumbnail
