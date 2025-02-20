import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import CustomImage from '../components/common/CustomImage';
import ProfilePhoto from '../assets/images/profile-photo.jpg';
import InfiniteSlider from '../components/InfiniteSlider';
import AboutMeDataSection from '../components/aboutMe/AboutMeDataSection';
import AboutMeHeroLabel from '../components/aboutMe/AboutMeHeroLabel';

const AboutMePage:React.FC = () => {
  return (
    <ScreenWrapper>
      <div className='flex flex-col h-screen w-[75%] items-center justify-around'>
        <div className='flex mt-24 w-fill justify-between'>
          <div className='flex flex-col lg:w-[calc(100%-300px)] gap-12 overflow-hidden'>
            <CustomText 
              title='I build high-performance applications, prioritizing efficiency, innovation, and seamless user experiences.' 
              fontFamily='fugaz-one' 
              classes='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-start xl:w-[80%]'
            />
            <InfiniteSlider />
          </div>
          <div className='hidden lg:flex'>
            <CustomImage src={ProfilePhoto} alt='profile-photo' classes='h-[400px] w-[300px] rounded-2xl'/>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-[100%] gap-4 md:gap-16'>
          <AboutMeHeroLabel label='.experience' text='6 Months'/>
          <AboutMeHeroLabel label='.location' text='Bhilai, IN'/>
          <AboutMeHeroLabel label='.freelance' text='Available'/>
        </div>
      </div>
      <AboutMeDataSection />
    </ScreenWrapper>
  )
}

export default AboutMePage;
