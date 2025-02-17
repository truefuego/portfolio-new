import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import { viewStyleFilterTypes, workTypeFilterTypes } from '../constants/constants';
import ProjectsFilterButtonSection from '../components/work/ProjectsFilterButtonSection';

const PersonalProjectsPage:React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>(workTypeFilterTypes.ALL);
  const [selectedViewStyle, setSelectedViewStyle] = useState<string>(viewStyleFilterTypes.FLEX);

  return (
    <ScreenWrapper>
      <div className='w-[65%] mt-48'>
        <CustomText title='Creating next level digital products' classes='w-[70%] text-7xl' />
        <ProjectsFilterButtonSection selectedFilter={selectedFilter} selectedViewStyle={selectedViewStyle} setSelectedFilter={setSelectedFilter} setSelectedViewStyle={setSelectedViewStyle}/> 
      </div>
    </ScreenWrapper>
  )
}

export default PersonalProjectsPage;
