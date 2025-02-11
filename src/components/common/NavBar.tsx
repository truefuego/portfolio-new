import React from "react";
import CustomText from "./CustomTextNormal";
import CustomLinkText from "./CustomLinkText";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between p-8 default-width">
      <CustomText title="ANKIT" fontFamily="climate-crisis" />
      <div className="flex flex-row gap-16">        
        <CustomText title="WORKS" link="/works" isClickable classes="hover:translate-y-2 transition-transform duration-500 ease-in-out hover:text-secondary-text" />
        <CustomText title="ABOUT" link="/about-me" isClickable classes="hover:translate-y-2 transition-transform duration-500 ease-in-out hover:text-secondary-text" />
        <CustomLinkText
          title="CONTACT ME"
          href="mailto:ankitsharma9152003@gmail.com"
          isClickable
          classes="hover:translate-y-2 transition-transform duration-500 ease-in-out hover:text-secondary-text"
        />
        <CustomText
          title="MY CV"
          openNewPage
          link="https://docs.google.com/document/d/1jDhy-1AAO8UCjjekwRIJSBac0A1UYu1V/edit?usp=sharing&ouid=102246377516776370837&rtpof=true&sd=true"
          isClickable
          classes="hover:translate-y-2 transition-transform duration-500 ease-in-out hover:text-secondary-text"
        />
      </div>
    </div>
  );
};

export default NavBar;
