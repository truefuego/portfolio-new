import React from 'react';
import { ICustomProjectCardProps } from './type';
import CustomText from '../common/CustomTextNormal';
import CustomImage from '../common/CustomImage';
import { ArrowIcon } from '../../assets/icons/icons';
import { motion, useTransform } from 'framer-motion';
import { useScreenWrapper } from '../../contexts/ScreenWrapperContext';

const CustomProjectCard:React.FC<ICustomProjectCardProps> = ({ projectData, range, targetScale, scrollProgress }) => {
  const { handleClick } = useScreenWrapper();
  const cardScale = useTransform(scrollProgress, range, [1,targetScale]);

  return (
    <motion.div className='w-[84%] border-2 rounded-2xl sticky top-20' style={{ backgroundColor: projectData.backgroundColor, borderColor: projectData.borderColor, scale: cardScale }}>
      <div className='flex justify-between' style={{ borderBottom: '2px', borderColor: projectData.borderColor}}>
        <CustomText title={String(projectData.year)} classes='p-4 pb-1 funnel-sans-semibold' fontSize='lg'/>
        <CustomText title={projectData.type} classes='p-4 pb-1 funnel-sans-semibold' fontSize='lg'/>
      </div>
      <div className='align-center mx-1 h-[2px]' style={{ backgroundColor: projectData.borderColor }}/>
      <div className='p-4 flex justify-between'>
        <div className='flex flex-col w-[100%]'>
          <div className='flex w-[fill] justify-between items-center'>
            <CustomText title={projectData.title} fontFamily='climate-crisis' classes='text-xl md:text-4xl'/>
            <div className='cursor-pointer self-start hover:-rotate-45 duration-400 ease-in-out scale-50 md:scale-100' onClick={() => handleClick(`/work${projectData.slug}`)}>
              <ArrowIcon />
            </div>
          </div>
          <div className='flex gap-8 mb-4'>
            {projectData?.about?.map((item, index) => (
              <div key={index}>
                <CustomText title={item.label} classes='md:text-2xl funnel-sans-semibold'/>
                <CustomText title={item.text} classes='text-xs md:text-lg funnel-sans-medium'/>
              </div>
            ))}
          </div>
          <CustomText title={`Skills - ${projectData.skills}`} classes='text-sm md:text-xl funnel-sans-semibold'/>
        </div>
      </div>
      <CustomImage src={projectData.imageURI} alt={projectData.title} classes='w-[calc(100%-16px)] m-2 rounded-2xl object-cover object-center max-h-[70vh]'/>
    </motion.div>
  )
}

export default CustomProjectCard