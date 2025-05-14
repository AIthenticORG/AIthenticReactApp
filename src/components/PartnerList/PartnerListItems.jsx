// Importeer motion van framer-motion voor animaties
import { motion } from "framer-motion";

// Component dat de lijst met partners animerend weergeeft
const PartnerListItems = ({ partners, from, to }) => {
    return(
        // Buitenste container die horizontaal scrollen verbergt
        <div className="flex overflow-x-hidden w-[100%] h-auto">

            {/* Herhaal de animatierij 3 keer voor continue looping */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i} // Unieke key voor elke rij
                    initial={{ x: from }} // Startpositie van de animatie
                    animate={{ x: to }} // Eindpositie van de animatie
                    transition={{
                        duration: 50, // Duur van de volledige beweging
                        repeat: Infinity, // Herhaal oneindig
                        ease: "linear", // Constante snelheid
                        repeatType: "loop" // Herhaal zonder pauze
                    }}
                    className="flex flex-shrink-0" // Zorgt dat de inhoud niet krimpt
                >
                    {/* Render alle partnernamen als tekstblokken */}
                    {partners.map((partner, index) => (
                        <p
                            key={index} // Unieke key voor React
                            draggable="false" // Voorkomt dat tekst per ongeluk gesleept wordt
                            className="select-none h-auto w-[200px] flex justify-center items-center text-white text-[23px] hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        >
                            {partner}
                        </p>
                    ))}
                </motion.div>
            ))}
        </div>
    )    
}

export default PartnerListItems;
