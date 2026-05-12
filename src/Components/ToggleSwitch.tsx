import React, { useState } from 'react'
import {motion} from "framer-motion"

const variants={
    off:{x:0},
    on:{x:80,right:1}
}
const ToggleSwitch = () => {
  const [isOn,setIsOn]=useState<boolean>(false);
  return (
    <div className='relative inline-block w-36 h-16' >

      <div className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${isOn?"bg-green-500":""}`} 
      onClick={()=>setIsOn(!isOn)}>
       <motion.div 
       variants={variants}
       animate={isOn?'on':'off'}
       transition={{type:"spring", stiffness:200}}
       className='absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow'
       />
      </div>
    </div>
  )
}

export default ToggleSwitch