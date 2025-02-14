import React from 'react'
import { IScreenWrapperProps } from './type'
import NavBar from './common/NavBar'
import Footer from './common/Footer'

const ScreenWrapper:React.FC<IScreenWrapperProps> = ({children}) => {
  return (
    <div className='bg-primary-background min-h-screen w-screen flex flex-col items-center'>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default ScreenWrapper