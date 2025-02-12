import React from 'react'
import CustomImage from '../common/CustomImage'
import GridLines from '../../assets/images/grid-lines.png';
import CustomText from '../common/CustomTextNormal';
import MouseIcon from '../../assets/icons/mouse.svg';
import CustomStackCard from './CustomStackCard';
import { myStackData } from '../../constants/homeConstants';

const CustomAboutMeSection:React.FC = () => {
  return (
    <div className='relative flex flex-col items-center w-screen' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url(${GridLines})`, backgroundSize: 'cover' } as React.CSSProperties}>
      <div className='grid grid-cols-2 z-10 pt-48 w-[85%]'>
      <div className='flex flex-row justify-end items-start'>
        <CustomText 
        title='Hello! I am Ankit Sharma, a passionate software developer specializing in building scalable and efficient applications.'
        classes='text-4xl w-[35vw]'
        fontFamily='funnel-sans-semibold'
        />
      </div>
      <CustomText 
        title='👋'
        classes='text-center text-[12vw] w-[35vw]'
        fontFamily='funnel-sans-semibold'
      />
      <div className='flex flex-row justify-end items-start'>
        <CustomImage src={MouseIcon} alt='mouse' classes='w-[96px] mx-12'/>
      </div>
      <CustomText 
          title='I excel in crafting optimized frontend systems, intuitive user interfaces, and high-performance applications.'
          classes='text-4xl w-[35vw] bg-stack-card-background p-8 h-fit rounded-3xl'
          fontFamily='funnel-sans-semibold'
        />
      </div>
      <div className='w-[65%] z-10 my-48'>
        <CustomText title='MY STACK' fontFamily='climate-crisis' fontSize='4xl'/>
        <CustomText title='Commitment to staying updated with the latest trends and techniques.' classes='' textColor='secondary-text'/>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
          {myStackData.map((item, index) => <CustomStackCard key={index} title={item.title} description={item.description} link={item.link} imageURI={item.imageURI} />)}
        </div>
      </div>
    </div>
  )
}

export default CustomAboutMeSection