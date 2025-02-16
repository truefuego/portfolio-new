import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import CustomText from '../components/common/CustomTextNormal';
import { GridIcon, LinewiseIcon } from '../assets/icons/icons';

const PersonalProjectsPage:React.FC = () => {
  const isActive = false;
  return (
    <ScreenWrapper>
      <div className='w-[65%] mt-48'>
        <CustomText title='Creating next level digital products' classes='w-[70%] text-7xl' />
        <div className='flex items-center justify-between my-24'>
          <div className='flex items-center gap-2'>
            <div className={`border-2 ${isActive ? 'bg-primary-text text-primary-background' : ' text-primary-text hover:bg-[#455CE9] hover:text-primary-background transition-colors duration-500 ease-in-out'} border-primary-text rounded-full w-fit p-4 px-8 cursor-pointer`}>
              <p className='funnel-sans'>All</p>
            </div>
            <div className='border-2 border-primary-text rounded-full w-fit p-4 px-8'>
              <CustomText title='Design'/>
            </div>
            <div className='border-2 border-primary-text rounded-full w-fit p-4 px-8'>
              <CustomText title='Development'/>
            </div>
          </div>
          <div className='flex  gap-2'>
            <div className='text-primary-text border-2 border-primary-text rounded-full w-fit p-3'>
              <LinewiseIcon />
            </div>
            <div className='text-primary-text border-2 border-primary-text rounded-full w-fit p-3'>
              <GridIcon />
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default PersonalProjectsPage;
