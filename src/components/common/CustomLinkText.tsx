import React from 'react'
import { ICustomTextProps } from "./type";

const CustomLinkText: React.FC<ICustomTextProps> = ({
  title,
  classes,
  fontFamily,
  fontSize,
  textColor,
  link,
  isClickable = true,
  href
}) => {
  return (
    <a
      className={`text-${textColor ? textColor : "primary-text"} 
        ${fontFamily ? fontFamily : "funnel-sans"} 
        text-${fontSize} ${classes}
        ${link ? "cursor-pointer" : ""}
        ${isClickable ? '' : 'pointer-events-none'}
    `}
      href={href}
    >
      {title}
    </a>
  )
};

export default CustomLinkText;
