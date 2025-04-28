import waarom from '../assets/waarom.png';
import waarom2 from '../assets/waarom2.png';

const WhyPage = () => {
  return (
    <div className="w-full min-h-[auto] flex flex-col items-center pt-20 md:pt-28">
        <div className="w-[80%] max-w-7xl flex flex-col gap-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h1 className="text-3xl md:text-5xl font-bold">Waarom?</h1>
                    <p className="text-sm md:text-lg leading-relaxed">
                        Dit is onze 'Waarom' pagina. Hier leggen we uit waarom we doen wat we doen. Lees verder voor meer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                        De toekomst van de gezondheidszorg is intelligent. Artificial Intelligence (AI) staat op het punt om alles op zijn kop te zetten, van diagnostiek en behandeling tot patiëntenzorg en administratieve efficiëntie. Navigeren door dit complexe landschap kan overweldigend aanvoelen, zelfs neigend tot identiteitsverlies van personen en organisaties. Wanneer er iets in de maatschappij verandert, passen we ons meestal aan.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                        Wanneer baanbrekende apparaten of machines, voorzien van AI, op de markt komen ontmoeten we AI. Denk aan robots, zelfsturende auto’s of drones. Hun programma’s leren van de omgeving waar ze zijn en nemen die informatie mee in het maken van beslissingen. Vooral binnen domeinen zoals gezondheidszorg, wetenschappelijk onderzoek, communicatie, transport, productie of defensie zal dat merkbaar zijn.
                    </p>
                </div>

                <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                        <img src={waarom} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[80%] max-w-7xl flex flex-col gap-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex w-full lg:w-1/2 justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                        <img src={waarom2} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-[0px] md:mt-[50px]">
                    <p className="text-sm md:text-base leading-relaxed">
                        De indrukwekkende kanten van AI brengen ook veel onzekerheden met zich mee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                        Organisaties worden geconfronteerd met vragen zoals: Wat kan ondersteund worden met AI? Waar beginnen we? Hoe zorgen we voor een verantwoorde en effectieve AI-integratie? Wat zal de invloed zijn op alle bestaande functies? Wat zijn de korter en langere termijn consequenties? Zal ik mijn baan wel behouden? Is onze strategie wel afgestemd op AI-ontwikkelingen?
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                        Bij het beantwoorden van deze vragen komt het ecosysteem van AIthentic om de hoek kijken. Wij helpen met het identificeren en beantwoorden op de Wat en Hoe vragen over AI toepassingen in de zorg.
                    </p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default WhyPage;
