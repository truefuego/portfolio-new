import React from 'react';
import { motion } from 'framer-motion';
import CustomText from './CustomTextNormal';
import { ICustomLoaderProps } from './type';

const CustomLoader: React.FC<ICustomLoaderProps> = ({ delay }) => {
  const pageTitle = window.location.pathname.split('/').pop()?.replace(/-/g, ' ').toLocaleUpperCase();
  return (
    <motion.div 
      className='absolute flex w-screen h-screen z-20 bg-stack-card-background items-center justify-center' 
      initial={{ top: 0 }} 
      animate={{ top: '-100vh' }}
      transition={{ duration: .5, delay: delay , ease: 'easeInOut' }}>
      <CustomText title={`• ${String(pageTitle ? pageTitle : 'HELLO')}`} fontFamily='funnel-sans-semibold' fontSize='5xl'/>
    </motion.div>
  );
}

export const CustomLoaderEnter: React.FC<ICustomLoaderProps> = ({ path, duration }) => {
  return (
    <motion.div 
      className='absolute flex w-screen h-screen bg-stack-card-background items-center justify-center' 
      initial={{ top: scrollY + window.outerWidth, zIndex: -30 }} 
      animate={{ top: scrollY, zIndex: 30 }}
      transition={{ duration: duration, ease: 'easeInOut' }}>
      <CustomText title={`• ${String(path?.toUpperCase())}`} fontFamily='funnel-sans-semibold' fontSize='5xl'/>
    </motion.div>
  );
}

export default CustomLoader;