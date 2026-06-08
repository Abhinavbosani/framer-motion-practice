import React from 'react'
import {motion} from "framer-motion";


const imageArray = [
  "https://picsum.photos/id/237/300/200",
  "https://picsum.photos/id/132/300/200",
  "https://picsum.photos/id/121/300/200",
  "https://picsum.photos/id/125/300/200",
  "https://picsum.photos/id/140/300/200",
];
const staggerVariants={
    hidden:{opacity:0},
    visible:{opacity:1}
}
const StaggeredImageGallery = () => {
  return (
    <motion.div className='flex'
    initial='hidden'
    animate='visible'
    variants={{
        visible:{
            transition:{
                staggerChildren:1
            }
        }
    }}>
        {imageArray.map((src,index)=>(
            <motion.img key={index} src={src} variants={staggerVariants} className='w-[10rem] h-auto ml-1 rounded'/>
        ))
    }
    </motion.div>
  )
}

export default StaggeredImageGallery