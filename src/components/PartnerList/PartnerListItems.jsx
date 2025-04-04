import { motion } from "framer-motion";

const PartnerListItems = ({ partners, from, to }) => {
    return(
        <div className="flex overflow-x-hidden w-[100%] h-auto">
            {/* Herhaal de motion.div voor elke set van partners */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: from }}
                    animate={{ x: to }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    className="flex flex-shrink-0"
                >
                    {partners.map((partner, index) => {
                        return (
                            <p
                                key={index}
                                draggable="false"
                                className="select-none h-auto w-[200px] flex justify-center items-center text-white text-[23px] hover:scale-[1.05] transition-all duration-300 ease-in-out"
                            >
                                {partner}
                            </p>
                        );
                    })}
                </motion.div>
            ))}
        </div>
    )    
}
export default PartnerListItems;