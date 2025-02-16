import React from 'react'
import CustomText from '../common/CustomTextNormal'
import { awardsData, educationData, iCanHelpYouWithData, workExperienceData } from '../../constants/aboutMeConstants'
import { myStackData } from '../../constants/homeConstants'
import CustomStackCard from '../home/CustomStackCard'
import GridLines from '../../assets/images/grid-lines.png'
import AboutMeLabel from './AboutMeLabel'
import { motion } from 'framer-motion'

const AboutMeDataSection:React.FC = () => {
  return (
    <div className='flex flex-col items-center' style={{ backgroundImage: `linear-gradient(#030303, rgba(0, 0, 0, 0.9), #030303), url(${GridLines})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', WebkitBackgroundSize: '100%' } as React.CSSProperties}>

        <CustomText title='I can help you with ...' fontFamily='fugaz-one' classes='w-[75%] text-4xl mt-16'/>
        <div className='grid grid-cols-3 w-[75%] gap-16 pt-16'>
            {iCanHelpYouWithData.map((item, index) => {
                return (
                    <motion.div 
                        className='flex w-fill flex-col' 
                        key={index} 
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
                        <CustomText title={item.index} classes='text-tertiary-text text-sm' fontFamily='fugaz-one'/>
                        <div className='h-[.5px] w-[100%] bg-tertiary-text'/>
                        <CustomText title={item.title} fontFamily='fugaz-one' classes='mt-4 mb-8 text-2xl'/>
                        <CustomText fontFamily='fugaz-one' textColor='secondary-text' title={item.description}/>
                    </motion.div>
                )
            })}
        </div>
        
        <div className='w-[75%] mt-28'>
            <AboutMeLabel title={workExperienceData.title} />
            {workExperienceData.data.map(( item, index ) => {
                return (
                    <motion.div 
                        className='grid w-[100%] grid-cols-3 mt-8 gap-16' 
                        key={index}
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
                        <CustomText title={item.duration} fontFamily='fugaz-one' fontSize='2xl'/>
                        <div>
                            <CustomText title={item.company.name} fontFamily='fugaz-one' fontSize='2xl'/>
                            <CustomText title={item.company.location} textColor='secondary-text' fontFamily='fugaz-one' />
                            <CustomText title={item.company.position} textColor='secondary-text' fontFamily='fugaz-one' />
                        </div>
                        <CustomText title={item.about} fontFamily='fugaz-one' textColor='secondary-text'/>  
                    </motion.div>
                )
            })}
        </div>

        <div className='w-[75%] mt-28'>
            <AboutMeLabel title={awardsData.title}/>
            {awardsData.data.map(( item, index ) => {
                return (
                    <motion.div 
                        className='grid w-[100%] grid-cols-3 mt-8 gap-16' 
                        key={index} 
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
                        <CustomText title={item.name} fontFamily='fugaz-one' fontSize='2xl'/>
                        <CustomText title={item.position} fontFamily='fugaz-one' fontSize='2xl'/>
                        <CustomText title={item.about} fontFamily='fugaz-one' textColor='secondary-text'/>  
                    </motion.div>
                )
            })}
        </div>

        <div className='w-[75%] mt-28'>
            <AboutMeLabel title={educationData.title} classes='mb-16'/>
            {educationData.data.map(( item, index ) => {
                return (
                    <motion.div 
                        className='grid w-[100%] grid-cols-3 mt-12 gap-16' 
                        key={index}
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
                        {item.map((text, i) => <CustomText key={i} title={text} fontFamily='fugaz-one' fontSize='2xl' textColor='secondary-text'/>)}
                    </motion.div>
                )
            })}
        </div>

        <div className='w-[65%] z-10 my-48'>
            <CustomText title='MY STACK' fontFamily='climate-crisis' fontSize='4xl'/>
            <CustomText title='Commitment to staying updated with the latest trends and techniques.' classes='' textColor='secondary-text'/>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
                {myStackData.map((item, index) => <CustomStackCard key={index} title={item.title} description={item.description} link={item.link} Icon={item.Icon} />)}
            </div>
        </div>

    </div>
  )
}

export default AboutMeDataSection