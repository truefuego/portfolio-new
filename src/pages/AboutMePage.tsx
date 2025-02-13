import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomLoader from '../components/common/CustomLoader';

const AboutMePage:React.FC = () => {
  
  return (
    <ScreenWrapper>
      <CustomLoader delay={.4}/>
    </ScreenWrapper>
  )
}

export default AboutMePage;
