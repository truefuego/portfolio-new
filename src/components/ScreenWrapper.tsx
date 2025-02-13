import React from 'react'
import { IScreenWrapperProps } from './type'

const ScreenWrapper:React.FC<IScreenWrapperProps> = ({children}) => {
  return (
    <div className='bg-primary-background min-h-screen w-screen flex flex-col items-center'>{children}</div>
  )
}

export default ScreenWrapper