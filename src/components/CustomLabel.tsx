import React from 'react'
import { ICustomLabelProps } from './type';

const CustomLabel:React.FC<ICustomLabelProps> = ({ label, text }) => {
  return (
    <div className='p-4'>
        <p className='text-tertiary-text funnel-sans-semibold text-xs'>{label.toUpperCase()}</p>
        <p className='text-secondary-text funnel-sans-semibold'>{text}</p>
    </div>
  )
}

export default CustomLabel;
