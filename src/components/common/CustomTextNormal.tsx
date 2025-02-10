import React from "react";
import { ICustomText } from "./type";
import { useNavigate } from "react-router-dom";

const CustomText: React.FC<ICustomText> = ({
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
      className={`text-${textColor ? textColor : "primary-text"} 
        ${fontFamily ? fontFamily : "funnel-sans"} 
        text-${fontSize} ${classes}
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
