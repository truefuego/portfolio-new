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
  isClickable = false,
  onClick
}) => {
  const navigate = useNavigate();
  return (
    <p
      className={`${classes} text-${textColor ? textColor : "primary-text"} 
        ${fontFamily ? fontFamily : "funnel-sans"} 
        text-${fontSize} 
        ${isClickable ? "cursor-pointer" : "pointer-events-none"}
    `}
      onClick={() => {
        if (link) {
          return openNewPage ? window.open(link, "_blank") : navigate(link);
        } else if (onClick) {
          onClick?.();
        }
      }}
    >
      {title}
    </p>
  );
};

export default CustomText;
