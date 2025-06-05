import React, { useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollToTop() {
    const {pathname} = useLocation(); // Haal de huidige locatie op
    // Scroll naar de bovenkant van de pagina wanneer de component wordt geladen
    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname])
    
    return null; // Deze component renderen niets
}  