import React from 'react'
import NavBar from '../components/common/NavBar';
import HomeHeroSection from '../components/home/HomeHeroSection';
import CustomAboutMeSection from '../components/home/CustomAboutMeSection';
import Footer from '../components/common/Footer';
import CustomProjectCard from '../components/home/CustomProjectCard';
import { projectsCardData } from '../constants/homeConstants';

const HomePage:React.FC = () => {
  return (
    <div className='bg-primary-background min-h-screen w-screen flex flex-col items-center'>
      <div className='collapsible-div' />
      <NavBar />
      <HomeHeroSection />
      <CustomProjectCard projectData={projectsCardData}/>
      <CustomAboutMeSection />
      <Footer />
    </div>
  )
}

export default HomePage;
