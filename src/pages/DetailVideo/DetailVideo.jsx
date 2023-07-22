import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Vid from '../../assets/video/contoh.mp4'

const DetailVideo = () => {
  return (
    <Video autoPlay loop>
        <source src={Vid} type='video/webm' />
    </Video>
  )
}

export default DetailVideo