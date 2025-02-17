import React from 'react'
import { ICustomImageProps } from './type'

const CustomImage: React.FC<ICustomImageProps> = ({ src, alt, classes, link, style }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${link ? 'cursor-pointer' : ''} ${classes}`} 
      onClick={() => link && window.open(link, "_blank")}
      style={style}  
    />
  )
}

export default CustomImage;
