import React from 'react'
import FilterIcon from './FilterIcon'
import { viewStyleFilterTypes, workTypeFilterOptions } from '../../constants/constants'
import FilterButton from './FilterButton'
import { GridIcon, LinewiseIcon } from '../../assets/icons/icons';
import { IProjectsFilterButtonSectionProps } from './type';

const ProjectsFilterButtonSection:React.FC<IProjectsFilterButtonSectionProps> = ({ selectedFilter, setSelectedFilter, selectedViewStyle, setSelectedViewStyle }) => {
    return (
        <div className='flex items-center justify-between my-24 gap-4'>
            <div className='flex items-center gap-2'>
                {workTypeFilterOptions.map((item, index) => <FilterButton key={index} title={item.label} isActive={selectedFilter === item.value} onClick={() => setSelectedFilter(item.value)}/>)}
            </div>
            <div className='md:flex gap-2 hidden'>
                <FilterIcon Icon={LinewiseIcon} isActive={selectedViewStyle === viewStyleFilterTypes.FLEX} onClick={() => setSelectedViewStyle(viewStyleFilterTypes.FLEX)}/>
                <FilterIcon Icon={GridIcon} isActive={selectedViewStyle === viewStyleFilterTypes.GRID} onClick={() => setSelectedViewStyle(viewStyleFilterTypes.GRID)}/>
            </div>
        </div>
    )
}

export default ProjectsFilterButtonSection