import React from 'react'
import { IFilterButtonProps } from './type'

const FilterButton: React.FC<IFilterButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <div 
      className={`border-2 text-xs lg:text-base ${isActive ? 'bg-secondary-text text-primary-background' : ' text-primary-text hover:bg-[#455CE9] hover:text-primary-background transition-colors duration-500 ease-in-out'} border-secondary-text rounded-full w-fit p-2 px-4 md:p-4 md:px-8  cursor-pointer`}
      onClick={onClick}    
    >
      <p className='funnel-sans'>{title}</p>
    </div>
  )
}

export default FilterButton