import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import { projectsData } from '../constants/worksConstants';
import VideoPlayer from '../components/VideoPlayer';
import { getPercentage } from '../utils/utils';
import CustomImage from '../components/common/CustomImage';
import GotoLinkButton from '../components/GotoLinkButton';

const ProjectPage:React.FC = () => {
  const directedPage = window.location.pathname.split('/').pop();
  const projectData = projectsData.find((item) => item.slug == directedPage);
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  if  (!projectData) return;
  
  return (
    <ScreenWrapper>
      <CustomText title={projectData.work} classes='w-[75%] text-8xl mt-48'/>
      <div className='grid grid-cols-3 w-[75%] gap-16 my-20'>
        <div className='flex w-fill flex-col'>
          <CustomText title='ROLE / SERVICES' classes='text-tertiary-text text-xs'/>
          <div className='my-4 h-[.5px] w-[100%] bg-tertiary-text'/>
          <CustomText title={projectData.services} classes='mb-8 text-2xl' fontFamily='funnel-sans-semibold'/>
        </div>
        <div className='flex w-fill flex-col'>
          <CustomText title='TECH STACK' classes='text-tertiary-text text-xs'/>
          <div className='my-4 h-[.5px] w-[100%] bg-tertiary-text'/>
          <CustomText title={projectData.techStack} classes='mb-8 text-2xl' fontFamily='funnel-sans-semibold'/>
        </div>
        <div className='flex w-fill flex-col'>
          <CustomText title='YEAR' classes='text-tertiary-text text-xs'/>
          <div className='my-4 h-[.5px] w-[100%] bg-tertiary-text'/>
          <CustomText title={projectData.year} classes='mb-8 text-2xl' fontFamily='funnel-sans-semibold'/>
        </div>
      </div>

      <div>
        <GotoLinkButton isLive={projectData.isLive} link={projectData.link} classes='bg-sky-600 w-12 h-12 md:w-36 md:h-36 rounded-full absolute right-[10vw] translate-y-10 translate-x-2 md:-translate-y-3 md:translate-x-8'/>
        <VideoPlayer videoURI={projectData.assets.video[0]} width={getPercentage(width, 75)} />
      </div>
      <div className='flex flex-col w-screen items-center justify-center py-16 bg-secondary-background'>
        <CustomImage src={projectData.assets.photo[0]} alt='photo-1' classes='w-[75%]'/>
      </div>

      <VideoPlayer videoURI={projectData.assets.video[1]} width={getPercentage(width, 75)} />

      <VideoPlayer videoURI={projectData.assets.video[2]} width={getPercentage(width, 100)} isFullWidth/>

      <div className='flex flex-col w-screen items-center justify-center py-16 bg-secondary-background'>
        <CustomImage src={projectData.assets.photo[0]} alt='photo-1' classes='w-[75%]'/>
      </div>

      <VideoPlayer videoURI={projectData.assets.video[3]} width={getPercentage(width, 75)} bgColor='secondary-background'/>
    </ScreenWrapper>
  )
}

export default ProjectPage;
