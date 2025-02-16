import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import { ICustomLabelProps } from '../components/type';
import CustomImage from '../components/common/CustomImage';
import ProfilePhoto from '../assets/images/profile-photo.jpg';
import InfiniteSlider from '../components/InfiniteSlider';
import AboutMeDataSection from '../components/aboutMe/AboutMeDataSection';

const AboutMePage:React.FC = () => {

  const RenderLabel:React.FC<ICustomLabelProps> = ({ label, text }) => {
    return (
      <div className='flex w-fill flex-col'>
        <div className='flex w-fill items-center gap-2'>
          <CustomText classes='text-tertiary-text' title={label} fontFamily='fugaz-one'/>
          <div className='h-[.5px] w-[100%] bg-tertiary-text'/>
        </div>
        <CustomText title={text} classes='text-secondary-text text-2xl' fontFamily='fugaz-one'/>
      </div>
    )
  }

  return (
    <ScreenWrapper>
      <div className='flex flex-col h-screen w-[75%] items-center justify-around'>
        <div className='flex mt-24 w-fill justify-between'>
          <div className='flex flex-col w-[calc(100%-300px)] gap-2 overflow-hidden'>
            <CustomText 
              title='I build high-performance applications, prioritizing efficiency, innovation, and seamless user experiences.' 
              fontFamily='fugaz-one' 
              classes='text-5xl leading-16'
            />
            <InfiniteSlider />
          </div>
          <div className=''>
            <CustomImage src={ProfilePhoto} alt='profile-photo' classes='h-[400px] w-[300px] rounded-2xl shad'/>
          </div>
        </div>
        <div className='grid grid-cols-3 w-[100%] gap-8'>
          <RenderLabel label='.experience' text='6 Months'/>
          <RenderLabel label='.location' text='Bhilai, IN'/>
          <RenderLabel label='.freelance' text='Available'/>
        </div>
      </div>
      <AboutMeDataSection />
    </ScreenWrapper>
  )
}

export default AboutMePage;
