import React from 'react'
import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion'
import './index.css'

const UseMotionValue = () => {
    const x=useMotionValue(100)

    useMotionValueEvent(x,"change",(latest)=>{
        console.log("x changed to", latest);
    })
   
  return (
    <motion.div
    className='box'
    drag
    dragConstraints={{left:0,right:200}}
    style={{x}}
    />
  )
}

export default UseMotionValue