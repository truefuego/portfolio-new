import React from 'react'
import { EmptyList } from '../../assets/icons/icons'
import CustomText from '../common/CustomTextNormal'
import { motion } from 'framer-motion'

const EmptyProjectList:React.FC = () => {
  return (
    <motion.div 
      className='flex flex-col text-secondary-text items-center gap-6' 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { duration:.5, damping: .5 }}}
    >
      <EmptyList />
      <CustomText title='Opps.. No Projects here!' classes='pr-12' textColor='secondary-text'/>
    </motion.div>
  )
}

export default EmptyProjectList;
