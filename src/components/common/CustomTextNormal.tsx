import React from "react";
import { ICustomText } from "./type";
import { useNavigate } from "react-router-dom";

const CustomText: React.FC<ICustomText> = ({
  title,
  classes,
  fontFamily,
  fontSize,
  fontColor,
  link,
  openNewPage,
  isClickable = true,
  href
}) => {
  const navigate = useNavigate();
  return href ? (
    <a
      className={`text-${fontColor ? fontColor : "primary-text"} 
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
      href={href}
    >
      {title}
    </a>
  ) : (
    <p
      className={`text-${fontColor ? fontColor : "primary-text"} 
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
