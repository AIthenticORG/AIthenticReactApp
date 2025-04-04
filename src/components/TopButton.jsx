import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 1000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className={`fixed right-10 bottom-10 p-2 border-2 rounded-full h-[45px] flex items-center justify-centertransition-all duration-300 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-blue-500 border-blue-400 shadow-lg transform
                ${
                    isVisible 
                        ? "opacity-100 scale-100 text-blue-500 border-blue-400 hover:scale-110 hover:bg-blue-400 hover:text-white" 
                        : "opacity-0 scale-90 pointer-events-none"
                }`}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default TopButton;
