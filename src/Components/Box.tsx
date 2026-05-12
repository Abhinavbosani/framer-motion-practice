import React from 'react'
import {motion} from 'framer-motion'

import '../index.css'

const Box = () => {
  return (
    <motion.div className='w-20 h-20 rounded-[50%] bg-green-600'
    initial={{y:0}}
    animate={{y:[0,50,100,200,100,50,0]}}
    transition={{duration:1, ease:"linear", delay:2,repeat:Infinity}}>
      
    </motion.div>
  )
}

export default Box