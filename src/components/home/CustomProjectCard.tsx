import React from 'react';
import { ICustomProjectCardProps } from './type';
import CustomText from '../common/CustomTextNormal';
import CustomImage from '../common/CustomImage';
import ArrowIcon from '../../assets/icons/arrow.svg';

const CustomProjectCard:React.FC<ICustomProjectCardProps> = ({ projectData }) => {
  
  return (
    <div className={`w-[84%] border-2 rounded-2xl`} style={{ backgroundColor: projectData.backgroundColor, borderColor: projectData.borderColor }}>
      <div className='flex justify-between' style={{ borderBottom: '2px', borderColor: projectData.borderColor}}>
        <CustomText title={String(projectData.year)} classes='p-4 pb-1 funnel-sans-semibold' fontSize='lg'/>
        <CustomText title={projectData.type} classes='p-4 pb-1 funnel-sans-semibold' fontSize='lg'/>
      </div>
      <div className='align-center mx-1 h-[2px]' style={{ backgroundColor: projectData.borderColor }}/>
      <div className='p-4 flex justify-between'>
        <div>
          <CustomText title={projectData.title} fontFamily='climate-crisis' classes='text-4xl'/>
          <div className='flex gap-8 my-4'>
            {projectData?.about?.map((item, index) => (
              <div key={index}>
                <CustomText title={item.label} classes='text-2xl funnel-sans-semibold'/>
                <CustomText title={item.text} classes='text-lg funnel-sans-medium'/>
              </div>
            ))}
          </div>
          <CustomText title={`Skills - ${projectData.skills}`} classes='text-xl funnel-sans-semibold'/>
        </div>
        <CustomImage src={ArrowIcon} alt='arrow' classes='cursor-pointer self-start hover:-rotate-45 duration-500 ease-in-out'/>
      </div>
      <CustomImage src={projectData.imageURI} alt={projectData.title} classes='w-[calc(100%-16px)] m-2 rounded-2xl'/>
    </div>
  )
}

export default CustomProjectCard