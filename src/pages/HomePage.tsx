import React, { useRef } from 'react'
import HomeHeroSection from '../components/home/HomeHeroSection';
import CustomAboutMeSection from '../components/home/CustomAboutMeSection';
import CustomProjectCard from '../components/home/CustomProjectCard';
import { projectsCardData } from '../constants/homeConstants';
import { useScroll } from 'framer-motion';
import ScreenWrapper from '../components/ScreenWrapper';

const HomePage:React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <ScreenWrapper>
      <HomeHeroSection />
      <div className='flex flex-col w-[100%] items-center my-24' ref={containerRef}>
        {projectsCardData.map((project, index) => {
          const targetScale = 1 - ((projectsCardData.length - 1 - index) * 0.05);
          return (
            <CustomProjectCard
              key={index}
              scrollProgress={scrollYProgress}
              projectData={project}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <CustomAboutMeSection />
    </ScreenWrapper>
  )
}

export default HomePage;
