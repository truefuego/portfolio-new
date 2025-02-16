import React from 'react'
import CustomText from '../common/CustomTextNormal'
import { ICustomTextProps } from '../common/type'

const AboutMeLabel:React.FC<ICustomTextProps> = ({ title , classes}) => {
    return (
        <div className={`${classes} flex w-[60%] items-center gap-2 mb-12`}>
            <CustomText title={title} textColor='tertiary-text' fontFamily='fugaz-one' classes='whitespace-nowrap'/>
            <div className='h-[.5px] w-[100%] bg-tertiary-text'/>
        </div>
    )
}

export default AboutMeLabel;
