import React from 'react'
import { ICustomText } from "./type";

const CustomLinkText: React.FC<ICustomText> = ({
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
