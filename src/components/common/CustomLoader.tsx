import React from 'react';
import { motion } from 'framer-motion';
import CustomText from './CustomTextNormal';
import { ICustomLoaderProps } from './type';

const CustomLoader: React.FC<ICustomLoaderProps> = ({ delay }) => {
  const pageTitle = window.location.pathname.split('/').pop()?.replace(/-/g, ' ').toLocaleUpperCase();
  return (
    <motion.div 
      className='absolute flex w-screen h-screen z-20 bg-secondary-background items-center justify-center' 
      initial={{ top: 0 }} 
      animate={{ top: '-100vh' }}
      transition={{ duration: 1, delay: delay , ease: 'easeInOut' }}>
      <CustomText title={`• ${String(pageTitle ? pageTitle : 'HELLO')}`} fontFamily='funnel-sans-semibold' fontSize='5xl'/>
    </motion.div>
  );
}

export const CustomLoaderEnter: React.FC<ICustomLoaderProps> = ({ path, duration }) => {
  return (
    <motion.div 
      className='absolute flex w-screen h-screen bg-secondary-background items-center justify-center' 
      initial={{ top: '100vh', zIndex: -30 }} 
      animate={{ top: 0, zIndex: 30 }}
      transition={{ duration: duration, ease: 'easeInOut' }}>
      <CustomText title={`• ${String(path?.toUpperCase())}`} fontFamily='funnel-sans-semibold' fontSize='5xl'/>
    </motion.div>
  );
}

export default CustomLoader;