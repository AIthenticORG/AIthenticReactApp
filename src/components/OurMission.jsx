import routeImage from "../assets/route.png";

// Definieer het component "OurMission"
const OurMission = () => {
    return(
        // Hoofdcontainer voor de missie sectie
    
        <div className="w-full py-15 lg:py-0 lg:min-h-[700px] flex flex-row bg-[#1BB1AB] justify-center items-center">

            
            
            {/* Linker gedeelte: tekst en uitleg over de missie */}
            <div className="w-full lg:w-2/4 h-full flex flex-col p-4 justify-center items-center lg:items-start text-center lg:text-left">
            
                {/* Titel van de missie */}
                <h1 className="text-white font-bold text-[38px] xl:text-[48px]">
                    Onze missie
                </h1>
                
                {/* Beschrijving van de missie */}
                <p className="text-white text-[14px] xl:text-[18px] mt-4 w-3/4">
                    Elke organisatie in de gezondheidszorg in staat te stellen de transformatieve kracht van AI te omarmen met behoud van de specifieke menselijke benadering die hun zorgverlening kenmerkt. De samenwerking tussen AI en zorgverlener 
                    te bevorderen en te begeleiden door hun krachten te bundelen voor optimale zorgverlening in de gehele zorgketen 
                </p>
                <h1 className="text-white font-bold text-[38px] xl:text-[48px]">
                    Onze visie
                </h1>
                <p className="text-white text-[14px] xl:text-[18px] mt-4 w-3/4">
                    AIthentic is opgericht vanuit de overtuiging dat AI de sleutel vormt tot een betere gezondheidszorg en wij 
                    zijn ingericht om deze veelbelovende transformatie te begeleiden. Over- en onderschatting van het potentieel en mate van samenwerking bewegen in deze fase van het AI-tijdperk snel heen en weer. Door balans te brengen kunnen betere beslissingen worden genomen om optimale patiëntenzorg te kunnen garanderen. Met behulp van een (inter)nationaal netwerk van toegewijde 
                    deskundigen zijn we in staat om dit jonge fenomeen professioneel te begeleiden, niet alleen in Nederland, maar wereldwijd.  
                </p>
                
                {/* Sectie met punten waar het bedrijf voor staat */}
            </div>
        
            {/* Rechter gedeelte: afbeelding van de route */}
            <div className="w-1/3 hidden lg:block h-full flex flex-col justify-center items-center">    
                <img src={routeImage} alt="Route" className="object-cover select-none" draggable="false" />
            </div>
            
        </div>
    )
}
export default OurMission;
