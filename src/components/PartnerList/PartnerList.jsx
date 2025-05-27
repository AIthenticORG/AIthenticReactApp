import React from 'react';
// Importeer het component dat de partnernamen animerend weergeeft
import PartnerListItems from './PartnerListItems';

// Component dat een lijst van samenwerkende bedrijven toont
const PartnerList = () => {
    // Array met partnernamen (herhaald voor continue animatie)
    const partners = [
        "PrivacyZorg", "Google", "Jayro", "CocaCola", "Xbox", "Nike", "Bora2", "SPZ",
        "PrivacyZorg", "Google", "Jayro", "CocaCola", "Xbox", "Nike", "Bora2", "SPZ",
    ];

    return (
        // Container met gekleurde achtergrond en verticale centrering
        <div className="w-full h-[200px] 2xl:h-[250px] flex flex-col bg-[#1BB1AB] justify-evenly items-center">
            {/* Titel boven de lijst */}
            <h1 className="text-white text-[25px] px-[15px] font-bold text-center">
                Below are all the companies we collaborate with.
            </h1>

            {/* Partnerlijst component met animatie van links naar rechts */}
            <PartnerListItems partners={partners} from={0} to={"-100%"}/>
        </div>
    );
}

export default PartnerList;
