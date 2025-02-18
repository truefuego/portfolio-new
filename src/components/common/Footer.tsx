import React, { useEffect, useState } from 'react'
import CustomText from './CustomTextNormal'
import CustomLinkText from './CustomLinkText'
import { LinkedInIcon, TwitterIcon, EmailIcon } from '../../assets/icons/icons';
import CustomLabel from '../CustomLabel';

const Footer:React.FC = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='w-[65%] flex items-center gap-8 my-24'>
        <EmailIcon />
        <CustomText title="Let's Work Together" fontFamily='climate-crisis' classes='text-5xl'/>
      </div>
      <div className='flex justify-between w-[85%] mt-8 items-center my-24'>
        <div className='flex items-center gap-4'>
          <CustomText title='Say Hello' fontFamily='funnel-sans-semibold' classes='mx-4'/>
          <div className='rounded-full hover:scale-110 duration-500 ease-in-out cursor-pointer' onClick={() => window.open('https://x.com/AnkitSh44355307', '_blank')}>
            <TwitterIcon />
          </div>
          <div className='rounded-full hover:scale-110 duration-500 ease-in-out cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/ankit-sharma-76a286228/', '_blank')}>
            <LinkedInIcon />
          </div>
        </div>
        <CustomText 
          title="Passionate about building scalable apps and solving complex problems? let's collaborate on innovative tech solutions!" 
          fontFamily='funnel-sans'
          classes='w-[35%] text-center'
        />
        <CustomLinkText
          title="Send a message"
          href="mailto:ankitsharma9152003@gmail.com"
          isClickable
          textColor='button-text'
          classes="funnel-sans-medium bg-sky-200 cursor-pointer px-4 py-2 mx-4 rounded-2xl hover:bg-sky-300 hover:scale-105 text-button-text duration-700 ease-in-out border-2 border-amber-50"
        />
      </div>
      <div className='w-[85%] flex m-12'>
        <CustomLabel label='version' text='2025 © Edition'/>
        <CustomLabel label='local time' text={currentTime}/>
      </div>
    </>
  )
}

export default Footer;
