import React from "react";
import { motion } from "framer-motion";

const ImageSliderItems = ({images, from, to}) => {
    return(
        <div className="flex overflow-x-hidden w-[100%] h-[200px]">
            <motion.div
               initial={{x: from}}
                animate={{x: to}}
                transition={{duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop"}}
                className="flex flex-shrink-0">

            {images.map((image, index) => {
                    return <img draggable="false" className="select-none h-[150px] w-[200px] hover:scale-[1.05] transition-all duration-300 ease-in-out object-fit" src={image} key={index} />;
                    })}            
           </motion.div>

           <motion.div
              initial={{x: from}}
                animate={{x: to}}
                transition={{duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop"}}
                className="flex flex-shrink-0">

            {images.map((image, index) => {
                    return <img draggable="false" className="select-none h-[150px] w-[200px] hover:scale-[1.05] transition-all duration-300 ease-in-out object-fit" src={image} key={index} />;
                    })}            
           </motion.div>

           <motion.div
              initial={{x: from}}
                animate={{x: to}}
                transition={{duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop"}}
                className="flex flex-shrink-0">

            {images.map((image, index) => {
                    return <img draggable="false" className="select-none h-[150px] w-[200px] hover:scale-[1.05] transition-all duration-300 ease-in-out object-fit" src={image} key={index} />;
                    })}            
           </motion.div>
        </div>
    )
}
export default ImageSliderItems;
