import HomePageImage from "../assets/AchtergrondPNG.jpg";  // Importeren van de afbeelding voor de achtergrond
import { useTranslation } from "react-i18next";  // Importeren van de vertaalfunctie
import { Link } from "react-router-dom";  // Link component voor navigatie

const HeadImage = () => {
    const {t} = useTranslation();  // Vertalingen ophalen via i18n
    return (
        <div className="relative w-full h-auto flex flex-col items-center">
            {/* Achtergrond afbeelding */}
            <div className="relative w-full h-screen">
                <img
                    src={HomePageImage}  // Achtergrond afbeelding wordt weergegeven
                    className="w-full h-full object-cover select-none"
                    alt="HomePageImage"
                    draggable="false"  // Voorkomt dat de afbeelding kan worden versleept
                />
                {/* Tekst en knop in de overlay */}
                <div className="absolute w-3/4 top-1/4 sm:top-1/3 ml-6 sm:ml-10 md:ml-20 text-white max-w-screen-lg">
                    {/* Hoofd titel */}
                    <h1 className="text-[30px] sm:text-[40px] md:text-[55px] font-bold leading-tight text-left">
                        <span className="text-white">{t('homepage.heroTitle')}</span>,
                    </h1>
                    {/* Subtitel */}
                    <h2 className="text-[20px] sm:text-[30px] md:text-[40px] mt-2 leading-tight text-left">
                        <span className="text-white">{t('homepage.heroSubtitle')}</span>
                    </h2>
                    <h2 className="text-[20px] sm:text-[30px] md:text-[50px] mt-2 leading-tight text-left font-bold italic">Onze purpose: Vertrouwd met AI</h2>
                    {/* Start learning knop */}
                    
                </div>
            </div>
        </div>
    );
}

export default HeadImage;
