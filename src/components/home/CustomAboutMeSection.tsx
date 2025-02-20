import React from 'react'
import GridLines from '../../assets/images/grid-lines.png';
import CustomText from '../common/CustomTextNormal';
import { MouseHoverIcon } from '../../assets/icons/icons';
import CustomStackCard from './CustomStackCard';
import { myStackData } from '../../constants/homeConstants';

const CustomAboutMeSection:React.FC = () => {
  return (
    <div className='relative flex flex-col items-center w-screen' style={{ backgroundImage: `linear-gradient(#030303, rgba(0, 0, 0, 0.9), #030303), url(${GridLines})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', WebkitBackgroundSize: '100%' } as React.CSSProperties}>
      <div className='grid md:grid-cols-2 grid-cols-1 z-10 pt-24 gap-4 w-[85%]'>
        <div className='flex flex-row justify-end items-start'>
          <CustomText 
          title='Hello! I am Ankit Sharma, a passionate software developer specializing in building scalable and efficient applications.'
          classes='text-lg md:w-[35vw] text-center md:text-start md:text-2xl lg:text-3xl xl:text-4xl'
          fontFamily='funnel-sans-semibold'
          />
        </div>
        <CustomText 
          title='👋'
          classes='hidden md:flex text-center text-[12vw] w-[35vw]'
          fontFamily='funnel-sans-semibold'
        />
        <div className='hidden md:flex flex-row justify-end items-start mx-12'>
          <MouseHoverIcon />
        </div>
        <CustomText 
          title='I excel in crafting optimized frontend systems, intuitive user interfaces, and high-performance applications.'
          classes='text-lg md:text-2xl lg:text-3xl xl:text-4xl md:w-[35vw] text-center md:text-start bg-stack-card-background p-8 h-fit rounded-3xl'
          fontFamily='funnel-sans-semibold'
        />
      </div>
      <div className='w-[65%] z-10 my-24'>
        <CustomText title='MY STACK' fontFamily='climate-crisis' fontSize='2xl md:text-4xl'/>
        <CustomText title='Commitment to staying updated with the latest trends and techniques.' classes='text-xs md:text-sm' textColor='secondary-text'/>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
          {myStackData.map((item, index) => <CustomStackCard key={index} title={item.title} description={item.description} link={item.link} Icon={item.Icon} />)}
        </div>
      </div>
    </div>
  )
}

export default CustomAboutMeSection