import React from "react";
import CustomText from "./CustomTextNormal";
import CustomLinkText from "./CustomLinkText";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between p-8 default-width">
      <CustomText title="ANKIT" fontFamily="climate-crisis" />
      <div className="flex flex-row gap-16">
        <CustomText title="ABOUT" link="/about-me" isClickable />
        <CustomLinkText
          title="CONTACT ME"
          href="mailto:ankitsharma9152003@gmail.com"
          isClickable
        />
        <CustomText
          title="MY CV"
          openNewPage
          link="https://docs.google.com/document/d/1jDhy-1AAO8UCjjekwRIJSBac0A1UYu1V/edit?usp=sharing&ouid=102246377516776370837&rtpof=true&sd=true"
          isClickable
        />
      </div>
    </div>
  );
};

export default NavBar;
