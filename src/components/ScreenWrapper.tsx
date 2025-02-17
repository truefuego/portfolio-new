import React, { useState } from 'react'
import { IScreenWrapperProps } from './type'
import NavBar from './common/NavBar'
import Footer from './common/Footer'
import CustomLoader, { CustomLoaderEnter } from './common/CustomLoader'
import { useNavigate } from 'react-router-dom'
import { ScreenWrapperContext } from '../contexts/ScreenWrapperContext'
import { motion } from 'framer-motion'

const ScreenWrapper:React.FC<IScreenWrapperProps> = ({children}) => {
  const navigate = useNavigate();
  const [showExitLoader, setShowExitLoader] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string>('');
  
  const handleClick = (link: string) => {
    const directedPage = window.location.pathname.split('/').pop() || '';
    setNextPage(link.split('/').pop()?.replace(/-/g, ' ') || '');
    setShowExitLoader(link?.substring(1) !== directedPage);
    setTimeout(() => {
      navigate(link);
    }, 500);
  }

  return (
    <ScreenWrapperContext.Provider value={{ handleClick }}>
      <div className='bg-primary-background min-h-screen w-screen flex flex-col items-center'>
        <NavBar />
        <CustomLoader delay={.4}/> 
        <motion.div initial={{ height: '100vh' }} animate={{ height: '0vh' }} transition={{ delay: .5, duration: .5, ease: 'easeInOut' }} />
        {showExitLoader && (<CustomLoaderEnter duration={.4} path={nextPage ? nextPage : 'Hello'}/>)}
        {children}
        <Footer />
      </div>
    </ScreenWrapperContext.Provider>
  )
}

export default ScreenWrapper;
