import React from 'react'
import { ICustomLabelProps } from '../type';
import CustomText from '../common/CustomTextNormal';

const AboutMeHeroLabel:React.FC<ICustomLabelProps> = ({ label, text }) => {
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

export default AboutMeHeroLabel;
