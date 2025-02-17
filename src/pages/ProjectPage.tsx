import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import CustomLoader from '../components/common/CustomLoader';

const ProjectPage:React.FC = () => {
  return (
    <ScreenWrapper>
      <CustomLoader delay={.4}/> 
      <CustomText title={window.location.pathname.split('/').pop() || ''} />
    </ScreenWrapper>
  )
}

export default ProjectPage;
