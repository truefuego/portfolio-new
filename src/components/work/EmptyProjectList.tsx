import React from 'react'
import { EmptyList } from '../../assets/icons/icons'
import CustomText from '../common/CustomTextNormal'

const EmptyProjectList:React.FC = () => {
  return (
    <div className='flex flex-col text-secondary-text items-center gap-6'>
        <EmptyList />
        <CustomText title='Opps.. No Projects here!' classes='pr-12' textColor='secondary-text'/>
    </div>
  )
}

export default EmptyProjectList