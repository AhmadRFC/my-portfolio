import React from 'react'
import { motion } from 'framer-motion'
import logoImage from '../../assets/images/logo.png'

const RightBanner = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <motion.img
        src={logoImage}
        alt="Ahmad Alabbasei"
        className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

export default RightBanner