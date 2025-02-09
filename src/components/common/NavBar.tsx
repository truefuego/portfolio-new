import React from 'react'
import CustomText from './CustomTextNormal'

const NavBar:React.FC = () => {
  return (
    <div className='flex flex-row justify-between p-8 w-[85%]'>
      <CustomText title='ANKIT' fontFamily='climate-crisis' isClickable={false}/>
      <div className='flex flex-row gap-16'>
        <CustomText title='ABOUT' link='/about-me'/>
        <CustomText title='CONTACT ME' href='mailto:ankitsharma9152003@gmail.com'/>
        <CustomText title='MY CV' openNewPage link='https://docs.google.com/document/d/1jDhy-1AAO8UCjjekwRIJSBac0A1UYu1V/edit?usp=sharing&ouid=102246377516776370837&rtpof=true&sd=true'/>
      </div>
    </div>
  )
}

export default NavBar