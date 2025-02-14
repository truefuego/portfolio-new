import React, { useEffect, useState } from "react";
import CustomText from "./CustomTextNormal";
import CustomLinkText from "./CustomLinkText";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLoader, { CustomLoaderEnter } from "./CustomLoader";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [showExitLoader, setShowExitLoader] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = ({ link }: { link: string }) => {
    const directedPage = window.location.pathname.split('/').pop() || '';
    setNextPage(link.split('/').pop()?.replace(/-/g, ' ') || '');
    setShowExitLoader(link?.substring(1) !== directedPage);
    setTimeout(() => {
      navigate(link);
    }, 500);
  }

  return (
    <>
      <div className="flex flex-row justify-between p-8 default-width fixed z-20 bg-gradient-to-b from-primary-background to-primary-background/0">
        <CustomText title="ANKIT" fontFamily="climate-crisis" onClick={() => handleClick({ link: '/' })} isClickable/>
        <div className="flex flex-row gap-16">        
          <CustomText title="WORKS" onClick={() => handleClick({ link: '/works' })} isClickable classes="hover:translate-y-2 transition-transform duration-500 ease-in-out hover:text-secondary-text" />
          <CustomText title="ABOUT" onClick={() => handleClick({ link: '/about-me' })} isClickable classes="hover:translate-y-2 transition-transform duration-500 ease-in-out hover:text-secondary-text" />
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
      {showExitLoader && (<CustomLoaderEnter duration={.4} path={nextPage ? nextPage : 'Hello'}/>)}     
      <CustomLoader delay={.4}/> 
      <motion.div initial={{ height: '100vh' }} animate={{ height: '0vh' }} transition={{ delay: .5, duration: .5, ease: 'easeInOut' }} />
    </>
  );
};

export default NavBar;
