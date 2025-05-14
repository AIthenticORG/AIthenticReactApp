import React from "react";
import { motion } from "framer-motion"; // Importeer framer-motion voor animaties

// Component dat de schuivende afbeeldingsrijen rendert
const ImageSliderItems = ({images, from, to}) => {
    return(
        // Buitenste container die horizontaal scrollen verbergt
        <div className="flex overflow-x-hidden w-[100%] h-[200px]">
            
            {/* Eerste rij afbeeldingen met animatie */}
            <motion.div
               initial={{x: from}} // Startpositie voor de animatie
               animate={{x: to}} // Eindpositie voor de animatie
               transition={{duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop"}} // Animatie-instellingen
               className="flex flex-shrink-0"
            >
                {/* Map door alle afbeeldingen en render elke als een <img> */}
                {images.map((image, index) => {
                    return (
                        <img
                            draggable="false"
                            className="select-none h-[150px] w-[200px] hover:scale-[1.05] transition-all duration-300 ease-in-out object-fit"
                            src={image}
                            key={index}
                        />
                    );
                })}            
            </motion.div>

            {/* Tweede rij afbeeldingen voor naadloze looping */}
            <motion.div
               initial={{x: from}}
               animate={{x: to}}
               transition={{duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop"}}
               className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                    return (
                        <img
                            draggable="false"
                            className="select-none h-[150px] w-[200px] hover:scale-[1.05] transition-all duration-300 ease-in-out object-fit"
                            src={image}
                            key={index}
                        />
                    );
                })}            
            </motion.div>

            {/* Derde rij afbeeldingen voor extra continuïteit */}
            <motion.div
               initial={{x: from}}
               animate={{x: to}}
               transition={{duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop"}}
               className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                    return (
                        <img
                            draggable="false"
                            className="select-none h-[150px] w-[200px] hover:scale-[1.05] transition-all duration-300 ease-in-out object-fit"
                            src={image}
                            key={index}
                        />
                    );
                })}            
            </motion.div>

        </div>
    );
}

export default ImageSliderItems;
