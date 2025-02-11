import React from 'react'
import NavBar from '../components/common/NavBar';
import CustomText from '../components/common/CustomTextNormal';

const HomePage:React.FC = () => {
  return (
    <div className='bg-primary-background min-h-screen flex flex-col items-center'>
      <NavBar />
      <CustomText 
        title='WEB'
        classes='leading-[90%] bg-clip-text text-transparent bg-gradient-to-b from-primary-text/50 to-primary-background/75' 
        fontFamily='danfo'
        fontSize='hero-large'
      />
      <CustomText 
        title='Designer & Developer'
        fontFamily='climate-crisis'
        classes='text-center text-[5.4vw] -mt-[5vh] sm:-mt-[10vw]'
      />
      <p className='text-primary-text text-hero-large hidden'>hi</p> 
    </div>
  )
}

export default HomePage;
