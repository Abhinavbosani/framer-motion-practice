import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Item 1", content: "Content for item 1" },
  { title: "Item 2", content: "Content for item 2" },
  { title: "Item 3", content: "Content for item 3" },
  { title: "Item 4", content: "Content for item 4" },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="flex justify-center align-center flex-col">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <button
            className="w-full p-4 bg-gray-200 text-black"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.title}
          </button>
          
            <motion.div 
            className="overflow-hidden"
            initial={{height:0}}
            animate={{height:openIndex === index ? "auto" : 0}}
            transition={{duration:0.3}}>
              <h1 className="p-4 bg-gray-400 text-black overflow-hidden">
                
                {item.content}
              </h1>
            </motion.div>
          
        </div>
      ))}
    </div>
  );
};

export default Accordion;
