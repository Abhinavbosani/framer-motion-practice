import React from 'react'
import {motion} from "framer-motion"

const boxes=Array.from({length:5})
const WaveEffect = () => {
  return (
    <div className='flex space-x-2'>
        {boxes.map((_,index)=>(
            <motion.div 
            key={index}
            className='w-16 h-16 bg-green-600'
            animate={{y:[0,-20,0]}}
            transition={{
                duration:0.6,
                repeat:Infinity,
                repeatType:'reverse',
                delay:index*0.1,
                
            }}
            />
        ))}
      
    </div>
  )
}

export default WaveEffect