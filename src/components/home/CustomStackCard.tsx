import React from 'react'
import { ICustomStackCardProps } from './type'
import CustomText from '../common/CustomTextNormal'
import { ArrowRightIcon } from '../../assets/icons/icons';

const CustomStackCard:React.FC<ICustomStackCardProps> = ({ title, description, link, Icon }) => {
  return (
   <div className='flex items-center gap-4 justify-between bg-stack-card-background p-2 rounded-xl cursor-pointer' onClick={() => window.open(link, '_blank')}>
    <div className='flex items-center'>
      <div className='bg-stack-card-background-secondary p-2 rounded-lg scale-80'>
        <Icon />
      </div>
      <div className='pl-3'>
        <CustomText title={title} fontFamily='funnel-sans-semibold md:text-lg'/>
        <CustomText title={description} classes='text-[8px] md:text-sm md:hidden xl:block' textColor='secondary-text'/>
      </div>
    </div>
    <ArrowRightIcon />
   </div>
  )
}

export default CustomStackCard