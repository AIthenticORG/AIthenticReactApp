const ServicesContainer = () => {
    return(
        <div className="h-[auto] w-full flex justify-center md:flex-row flex-col items-center">
            <div className="h-[500px] w-[300px] m-[100px] rounded-[20px] text-center border border-[1px]">
                <div className="h-[20%] flex items-center justify-center">
                    <h1 className="text-black font-bold text-3xl">Innovatie</h1>
                </div>
                <div className="h-[80%] bg-[#36939F] rounded-[20px]">
                    <div className="w-full h-[100px] bg-[#0D5B58] rounded-[20px]">
                        <p className="text-white p-3 text-start text-sm">Wij bieden AI-advies om organisaties in de gezondheidszorg te helpen gegevens en AI te benutten voor innovatie en efficiëntie.</p>
                    </div>
                    <ul className="text-start text-white list-disc list-outside pl-6">
                        <li className="pt-3">
                            AI voor patiëntenervaring 
                            en -betrokkenheid.
                        </li>
                        <li className="pt-3">
                            Operationele efficiëntie via AI-gestuurde resourcetoewijzing.
                        </li>
                        <li className="pt-3">
                            AI-gestuurde fraudedetectie en revenu-cycle management.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[500px] w-[300px] m-[100px] rounded-[20px] text-center border border-[1px]">
                <div className="h-[20%] flex items-center justify-center">
                    <h1 className="text-black font-bold text-3xl">Gezondheids Analytics</h1>
                </div>
                <div className="h-[80%] bg-[#36939F] rounded-[20px]">
                    <div className="w-full h-[120px] bg-[#0D5B58] rounded-[20px]">
                        <p className="text-white p-3 text-start text-sm">Wij leveren strategisch AI-advies aan organisaties in de gezondheidszorg, waarbij de nadruk ligt op waarde-gebaseerde zorg, operationele transformatie en klinische innovatie.</p>
                    </div>
                    <ul className="text-start text-white list-disc list-outside pl-6">
                        <li className="pt-3">
                            AI voor klinische beslissingsondersteuning en gepersionaliseerde zorg.
                        </li>
                        <li className="pt-3">
                            Voorspellende analyses voor risicostratificatie van patiënten en populatiegezondheid.
                        </li>
                        <li className="pt-3">
                            AI-gebaseerde digitale transformatie en personeelsoptimalisatie.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
        
export default ServicesContainer;