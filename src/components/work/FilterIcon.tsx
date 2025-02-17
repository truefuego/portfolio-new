import React from 'react'
import { IFilterIconProps } from './type'

const FilterIcon:React.FC<IFilterIconProps> = ({ Icon, isActive, onClick }) => {
  return (    
    <div 
        className={`border-2 ${isActive ? 'bg-secondary-text text-primary-background' : ' text-primary-text hover:bg-[#455CE9] hover:text-primary-background transition-colors duration-500 ease-in-out'} border-secondary-text rounded-full w-fit p-3 cursor-pointer`}
        onClick={onClick}
    >
        <Icon />
    </div>
  )
}

export default FilterIcon