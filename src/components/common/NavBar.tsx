import React, { useEffect } from "react";
import CustomText from "./CustomTextNormal";
import CustomLinkText from "./CustomLinkText";
import { useLocation } from "react-router-dom";
import { useScreenWrapper } from "../../contexts/ScreenWrapperContext";

const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  const { handleClick } = useScreenWrapper();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-row justify-between p-8 px-32 w-screen fixed z-20 bg-gradient-to-b from-primary-background to-primary-background/0">
      <CustomText
        title="ANKIT"
        fontFamily="climate-crisis"
        onClick={() => handleClick("/")}
        isClickable
      />
      <div className="flex flex-row gap-16">
        <CustomText
          title="WORK"
          onClick={() => handleClick("/work")}
          isClickable
          classes="hover:translate-y-1 transition-transform duration-500 ease-in-out hover:text-secondary-text"
        />
        <CustomText
          title="ABOUT"
          onClick={() => handleClick("/about-me")}
          isClickable
          classes="hover:translate-y-1 transition-transform duration-500 ease-in-out hover:text-secondary-text"
        />
        <CustomLinkText
          title="CONTACT ME"
          href="mailto:ankitsharma9152003@gmail.com"
          isClickable
          classes="hover:translate-y-1 transition-transform duration-500 ease-in-out hover:text-secondary-text"
        />
        <CustomText
          title="MY CV"
          openNewPage
          link="https://docs.google.com/document/d/1jDhy-1AAO8UCjjekwRIJSBac0A1UYu1V/edit?usp=sharing&ouid=102246377516776370837&rtpof=true&sd=true"
          isClickable
          classes="hover:translate-y-1 transition-transform duration-500 ease-in-out hover:text-secondary-text"
        />
      </div>
    </div>
  );
};

export default NavBar;
