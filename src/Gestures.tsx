import React from 'react'
import { motion } from 'framer-motion'
import './index.css'



const Gestures = () => {
  return (
    <div className='flex items-center justify-around h-screen'>
        {/* whileHover */}
        <motion.div
        className='box'
        whileHover={{scale:1.2, rotate:10}}
        transition={{type:"spring",stiffness:300}}
        />
        {/* whileTap */}
        <motion.div
        className='box'
        whileTap={{scale:0.8, backgroundColor:"crimson"}}
        transition={{type:'spring',stiffness:300}}
        />
        {/* whileDrag */}
        <motion.div
        className='box'
        drag="x"/>
        
    </div>
  )
}

export default Gestures