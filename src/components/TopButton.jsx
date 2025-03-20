import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 1){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () =>{   
           window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }; 
    
    return (
        isVisible &&
            (
            <button onClick={handleClick} className="fixed right-10 bottom-10 p-2 text-blue-500 hover:scale-[1.1] border-[2px] border-blue-400 rounded-full h-[45px] flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out focus:ring-3 focus:ring-blue-400">  
                <FontAwesomeIcon icon={faArrowUp} />
            </button>   
            )
    );
    }
export default TopButton;