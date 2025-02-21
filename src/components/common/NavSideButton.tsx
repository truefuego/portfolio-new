import React from 'react'
import CustomText from './CustomTextNormal'
import { INavSideButtonProps } from './type'

const NavSideButton:React.FC<INavSideButtonProps> = ({ title, isOpen, classes, onClick }) => {
  const path = window.location.pathname.split('/').pop() || 'HOME';
  return (
    <div className={`flex justify-center items-center h-[25vh] ${classes} transition-all cursor-pointer ${isOpen ? 'w-screen' : 'w-0'}`} onClick={() => onClick()}>
      <CustomText title={title} textColor={title === path?.replace(/-/g, ' ').toUpperCase() ? "tertiary-text" : "secondary-text"} classes={`text-5xl hover:text-6xl transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} fontFamily="funnel-sans-semibold"/>
    </div>
  )
}

export default NavSideButton;
