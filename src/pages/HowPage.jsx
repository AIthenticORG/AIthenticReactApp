import hoe from '../assets/hoe.png';
import hoe2 from '../assets/hoe2.png';
import hoe3 from '../assets/hoe3.png';

const HowPage = () => {
    return(
        <div className="w-full flex flex-col items-center pt-20 md:pt-28">
            <div className="w-[80%] max-w-7xl flex flex-col gap-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h1 className="text-3xl md:text-5xl font-bold">Hoe?</h1>
                        <p className="text-sm md:text-lg leading-relaxed">
                            Op deze pagina leggen wij uit hoe wij te werk gaan. Lees verder voor een gedetailleerde toelichting.
                        </p>
                        <br />
                        <h1 className='text-2xl md:text-3xl font-semibold'>Algemeen</h1>
                        <p>AIthentic biedt end-to-end AI-adviesdiensten op maat voor organisaties in de gezondheidszorg, waaronder strategieontwikkeling, samenwerking tussen teams en AI, AI-implementaties en voortdurende optimalisatie als gevolg van de snelle veranderingen. Het bijhouden van de ontwikkelingen van (exponentiële) technologieën is niet het primaire aandachtsgebied van zorginstellingen, maar kan door gespecialiseerde bedrijven worden aangeboden.</p>
                        <ul className='list-disc list-inside text-sm md:text-base leading-relaxed'>
                            <li>
                            We laten onze diensten voor een groot deel leiden door een assessment die we uitvoeren binnen uw organisatie. Door middel van interviews, aangevuld met andere vormen van gegevensverzameling, zijn we in staat om een AI-vingerafdruk te maken van vrijwel elk type organisatie.
                            </li>
                            <li>
                                Onze aanpak is eenvoudig en holistisch. Het domein verandert zo snel dat het beter is te kijken naar de mogelijkheden, uitdagingen en consequenties. Ons wereldwijde netwerk van mensen die zich bezighouden met AI zijn onze bakens om zonder kleerscheuren te navigeren en voortdurend kritisch te zijn en de juiste vragen te stellen.
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                            <img src={hoe} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="w-[80%] max-w-7xl flex flex-col gap-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex w-full lg:w-1/2 justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                            <img src={hoe2} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-0 md:mt-[50px]">
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
}
export default HowPage;