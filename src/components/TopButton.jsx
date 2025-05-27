import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopButton = () => {
    // State om bij te houden of de knop zichtbaar moet zijn
    const [isVisible, setIsVisible] = useState(false);
    // Referentie voor de knop, om toegang te krijgen tot de DOM
    const buttonRef = useRef(null);

    useEffect(() => {
        // Functie om de zichtbaarheid van de knop te bepalen op basis van scrollpositie
        const handleScroll = () => {
            setIsVisible(window.scrollY > 1000); // Toon de knop als er meer dan 1000 pixels is gescrold
        };

        // Eventlistener toevoegen voor scrollen
        window.addEventListener("scroll", handleScroll);

        // Cleanup de eventlistener bij unmounten van het component
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Functie om naar de top van de pagina te scrollen wanneer de knop wordt ingedrukt
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Verwijder de focus van de knop wanneer erop geklikt wordt
        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    };

    return (
        // De knop om naar boven te scrollen
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
            {/* Het pijltje omhoog icoon */}
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default TopButton;
