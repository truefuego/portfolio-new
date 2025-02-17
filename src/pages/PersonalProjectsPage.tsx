import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import { GridIcon, LinewiseIcon } from '../assets/icons/icons';
import FilterButton from '../components/work/FilterButton';
import FilterIcon from '../components/work/FilterIcon';
import { viewStyleFilterTypes, workTypeFilterOptions, workTypeFilterTypes } from '../constants/constants';

const PersonalProjectsPage:React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>(workTypeFilterTypes.ALL);
  const [selectedViewStyle, setSelectedViewStyle] = useState<string>(viewStyleFilterTypes.FLEX);

  return (
    <ScreenWrapper>
      <div className='w-[65%] mt-48'>
        <CustomText title='Creating next level digital products' classes='w-[70%] text-7xl' />
        <div className='flex items-center justify-between my-24'>
          <div className='flex items-center gap-2'>
            {workTypeFilterOptions.map((item) => <FilterButton title={item.label} isActive={selectedFilter === item.value} onClick={() => setSelectedFilter(item.value)}/>)}
          </div>
          <div className='flex gap-2'>
            <FilterIcon Icon={LinewiseIcon} isActive={selectedViewStyle === viewStyleFilterTypes.FLEX} onClick={() => setSelectedViewStyle(viewStyleFilterTypes.FLEX)}/>
            <FilterIcon Icon={GridIcon} isActive={selectedViewStyle === viewStyleFilterTypes.GRID} onClick={() => setSelectedViewStyle(viewStyleFilterTypes.GRID)}/>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default PersonalProjectsPage;
