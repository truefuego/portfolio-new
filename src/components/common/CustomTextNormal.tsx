import React from "react";
import { ICustomTextProps } from "./type";
import { useNavigate } from "react-router-dom";

const CustomText: React.FC<ICustomTextProps> = ({
  title,
  classes,
  fontFamily,
  fontSize,
  textColor,
  link,
  openNewPage,
  isClickable = false
}) => {
  const navigate = useNavigate();
  return (
    <p
      className={`${classes} text-${textColor ? textColor : "primary-text"} 
        ${fontFamily ? fontFamily : "funnel-sans"} 
        text-${fontSize} 
        ${link ? "cursor-pointer" : ""}
        ${isClickable ? '' : 'pointer-events-none'}
    `}
      onClick={() => {
        if (link) {
          return openNewPage ? window.open(link, "_blank") : navigate(link);
        }
      }}
    >
      {title}
    </p>
  );
};

export default CustomText;
