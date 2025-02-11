import React from 'react'
import NavBar from '../components/common/NavBar';
import CustomText from '../components/common/CustomTextNormal';
import LinkedInLogo from '../assets/icons/LinkedinLogo.svg';
import TwitterLogo from '../assets/icons/TwitterLogo.svg';
import CustomImage from '../components/common/CustomImage';
import CustomLinkText from '../components/common/CustomLinkText';

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
      <div className='text-primary-text text-secondary-text text-hero-large hidden' /> 
      <div className='flex justify-between w-[85%] mt-8 items-center'>
        <div className='flex items-center gap-4'>
          <CustomText title='Say Hello' fontFamily='funnel-sans-semibold' classes='mx-4'/>
          <CustomImage src={TwitterLogo} alt='twitter-logo' classes='rounded-full' link='https://x.com/AnkitSh44355307' />
          <CustomImage src={LinkedInLogo} alt='linkedin' classes='rounded-full' link='https://www.linkedin.com/in/ankit-sharma-76a286228/' />
        </div>
        <CustomText 
          title='Hello, I’m Ankit Sharma - a backend and web developer skilled in Node.js, React.js, and MongoDB. I build scalable, high-performance solutions with a strong focus on data structures and algorithms. Based in Bhilai, India.' 
          fontFamily='funnel-sans'
          classes='w-[50%] text-center'
        />
        <CustomLinkText
          title="CONTACT ME"
          href="mailto:ankitsharma9152003@gmail.com"
          isClickable
          textColor='button-text'
          classes="funnel-sans-medium bg-sky-200 cursor-pointer px-4 py-2 mx-4 rounded-2xl hover:bg-sky-300 text-button-text duration-700 ease-in-out border-2 border-amber-50"
        />
      </div>
    </div>
  )
}

export default HomePage;
