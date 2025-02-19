import React from 'react'
import { IVideoPlayerProps } from './type';
import ReactPlayer from 'react-player';

const VideoPlayer:React.FC<IVideoPlayerProps> = ({ videoURI, width, classes, isFullWidth = false, bgColor }) => {
  return (
    <div className={`flex w-screen ${classes} pointer-events-none items-center justify-center ${isFullWidth ? '' : 'py-16'} bg-${bgColor}`}>
        <ReactPlayer url={ videoURI } playing muted loop controls={false} width={width} height={width/16*9} />
    </div>
  )
}

export default VideoPlayer;
