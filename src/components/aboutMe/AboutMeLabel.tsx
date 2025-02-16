import React from 'react'
import CustomText from '../common/CustomTextNormal'
import { ICustomTextProps } from '../common/type'
import { motion } from 'framer-motion';

const AboutMeLabel:React.FC<ICustomTextProps> = ({ title , classes}) => {
    return (
        <motion.div
            className={`${classes} flex w-[60%] items-center gap-2 mb-12`} 
            initial={{ opacity: 0, y: 50, scale: .9}}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: .3,
                    bounceDamping: .5
                }
            }}
            viewport={{ once: true }}
        >
            <CustomText title={title} textColor='tertiary-text' fontFamily='fugaz-one' classes='whitespace-nowrap'/>
            <div className='h-[.5px] w-[100%] bg-tertiary-text'/>
        </motion.div>
    )
}

export default AboutMeLabel;
