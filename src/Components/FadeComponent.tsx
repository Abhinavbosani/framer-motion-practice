import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FadeComponent = () => {
  const [visible, setVisible] = useState(true);
  return (

    <div className='h-screen flex items-center justify-center flex-col'>
      <button className='mb-4 px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setVisible(!visible)}>
        Toggle Fade
      </button>
      <AnimatePresence>
        {visible &&
          <motion.div className='bg-red-500 rounded p-4 text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Its a fade component

          </motion.div>

        }
      </AnimatePresence>
    </div>
    
    
  )
}

export default FadeComponent