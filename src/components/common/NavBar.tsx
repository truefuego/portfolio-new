import React, { useEffect, useState } from "react";
import CustomText from "./CustomTextNormal";
import CustomLinkText from "./CustomLinkText";
import { useLocation } from "react-router-dom";
import { useScreenWrapper } from "../../contexts/ScreenWrapperContext";
import { NavCrossIcon, NavHamIcon } from "../../assets/icons/icons";
import NavSideButton from "./NavSideButton";

const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  const { handleClick } = useScreenWrapper();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);

  const toggleOpenSidePanel = () => {
    setIsSidePanelOpen(prev => !prev);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="flex flex-row justify-between p-8 md:px-16 lg:px-32 w-screen fixed z-20 bg-gradient-to-b from-primary-background to-primary-background/0">
      <CustomText
        title="ANKIT"
        fontFamily="climate-crisis"
        onClick={() => handleClick("/")}
        isClickable
      />
      <div className={`flex-row gap-16 ${scrollY > 100 ? 'hidden' : 'md:flex hidden'}`}>
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
      <div className={`bg-slate-600 z-30 cursor-pointer h-8 w-8 items-center justify-center rounded-lg ${scrollY > 100 || isSidePanelOpen ? 'flex' : 'flex md:hidden'}`} onClick={toggleOpenSidePanel}>
        {isSidePanelOpen ? <NavCrossIcon /> : <NavHamIcon />}
      </div>
      <div className={`absolute top-0 left-0 h-screen transition-all`}>
        <NavSideButton title="HOME" classes="bg-gray-950 duration-350" onClick={() => handleClick("/")} isOpen={isSidePanelOpen}/>
        <NavSideButton title="WORK" classes="bg-slate-950 duration-400" onClick={() => handleClick("/work")} isOpen={isSidePanelOpen}/>
        <NavSideButton title="ABOUT ME" classes="bg-zinc-950 duration-450" onClick={() => handleClick("/about-me")} isOpen={isSidePanelOpen}/>
        <NavSideButton title="MY CV" classes="bg-stone-950 duration-500" onClick={() => window.open("https://docs.google.com/document/d/1jDhy-1AAO8UCjjekwRIJSBac0A1UYu1V/edit?usp=sharing&ouid=102246377516776370837&rtpof=true&sd=true","_blank")} isOpen={isSidePanelOpen}/>
      </div>
    </div>
  );
};

export default NavBar;
