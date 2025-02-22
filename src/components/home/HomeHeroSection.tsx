import React from 'react'
import CustomText from '../common/CustomTextNormal'
import CustomLinkText from '../common/CustomLinkText'
import { LinkedInIcon, TwitterIcon } from '../../assets/icons/icons';

const HomeHeroSection:React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
        <CustomText
            title='WEB'
            classes='leading-[90%] mt-24 bg-clip-text text-transparent bg-gradient-to-b from-primary-text/50 to-primary-background/75' 
            fontFamily='danfo'
            fontSize='hero-large'
        />
        <CustomText 
            title='Designer & Developer'
            fontFamily='climate-crisis'
            textColor='secondary-text'
            classes='text-center text-[5.4vw] -mt-[5vh] sm:-mt-[10vw] shining-text'
        />
        <div className='text-primary-text text-hero-large hidden' /> 
        <div className='flex flex-col md:flex-row justify-between w-[85%] mt-16 items-center gap-4'>
            <div className='flex items-center gap-4'>
                <CustomText title='Say Hello' fontFamily='funnel-sans-semibold' classes='mx-4 text-sm'/>
                <div className='rounded-full hover:scale-110 duration-500 ease-in-out cursor-pointer' onClick={() => window.open('https://x.com/AnkitSh44355307', '_blank')}>
                    <TwitterIcon />
                </div>
                <div className='rounded-full hover:scale-110 duration-500 ease-in-out cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/ankit-sharma-76a286228/', '_blank')}>
                    <LinkedInIcon />
                </div>
            </div>
            <CustomText 
                title='Hello, I’m Ankit Sharma - a backend and web developer skilled in Node.js, React.js, and MongoDB. I build scalable, high-performance solutions with a strong focus on data structures and algorithms. Based in Bhilai, India.' 
                fontFamily='funnel-sans'
                classes='md:w-[50%] text-center md:text-base text-xs'
            />
            <CustomLinkText
                title="CONTACT ME"
                href="mailto:ankitsharma9152003@gmail.com"
                isClickable
                textColor='button-text'
                classes="funnel-sans-medium bg-sky-200 text-xs md:text-sm cursor-pointer px-4 py-2 mx-4 rounded-2xl hover:bg-sky-300 hover:scale-105 text-button-text duration-700 ease-in-out border-2 border-amber-50"
            />
        </div>
    </div>
  )
}

export default HomeHeroSection