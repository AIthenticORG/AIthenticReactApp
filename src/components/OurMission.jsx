import React from 'react';
import routeImage from "../assets/route.png";

const OurMission = () => {
    return(
        <div className="w-full py-15 lg:py-0 lg:min-h-[700px] flex flex-row bg-[#1BB1AB] justify-center items-center">
            <div className="w-full lg:w-2/4 h-full flex flex-col p-4 justify-center items-center lg:items-start text-center lg:text-left">
                <h1 className="text-white font-bold text-[38px] xl:text-[48px]">
                    Onze missie
                </h1>
                <p className="text-white text-[14px] xl:text-[18px] mt-4 w-3/4">
                    Authentiek blijven in het tijdperk van AI.
                    Behoudt je uniciteit en maak AI concreet voor jouw organisatie.
                </p>
                <p className="text-white text-[14px] xl:text-[18px] mt-4 w-3/4">
                    AIthentic is opgericht vanuit de overtuiging dat AI de sleutel vormt tot een betere gezondheidszorg.
                    Wij zijn ingericht om te begeleiden in deze tijd van transformatie.
                </p>
                <section class="max-w-4xl mt-10 flex flex-col justify-center items-center lg:items-start"> 
                    <h1 class="text-2xl font-bold text-white mb-10">
                        Waar wij voor staan
                    </h1>
                    <ul class="list-disc list-inside space-y-4 text-lg leading-relaxed flex flex-col justify-center items-center lg:items-start">
                        <li class="text-white text-[14px] xl:text-[18px] w-3/4 lg:w-4/5 text-center lg:text-left">
                            Elke organisatie in de gezondheidszorg in staat te stellen de transformatieve kracht van
                            AI te omarmen met behoud van de specifieke menselijke benadering
                            die hun zorgverlening kenmerkt.
                        </li>
                        <li class="text-white text-[14px] xl:text-[18px] w-3/4 lg:w-4/5 text-center lg:text-left">
                            De samenwerking tussen AI en zorgverleners te bevorderen en te begeleiden
                            door hun krachten te bundelen voor optimale zorgverlening in de gehele zorgketen.
                        </li>
                    </ul>
                </section>
            </div>
            <div className="w-1/3 hidden lg:block h-full flex flex-col justify-center items-center">    
                <img src={routeImage} alt="Route" className="object-cover select-none" draggable="false" />
            </div>
            
        </div>
    )
}
export default OurMission;
