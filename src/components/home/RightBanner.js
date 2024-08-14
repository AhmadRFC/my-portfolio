import React from 'react'
import { motion } from 'framer-motion'
import logoImage from '../../assets/images/logo.png'  // Adjust this path as needed

const RightBanner = () => {
  return (
    <div className='w-full flex justify-center items-center relative'>
      <motion.img
        src={logoImage}
        alt="Ahmad Alabbasei"
        className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

export default RightBanner