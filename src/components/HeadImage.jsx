import HomePageImage from "../assets/AchtergrondPNG.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeadImage = () => {
    const {t} = useTranslation();
    return (
        <div className="relative w-full h-auto flex flex-col items-center">
            <div className="relative w-full h-screen">
                <img
                    src={HomePageImage}
                    className="w-full h-full object-cover select-none"
                    alt="HomePageImage"
                    draggable="false"/>
                <div className="absolute top-1/4 sm:top-1/3 ml-6 sm:ml-10 md:ml-20 text-white max-w-screen-lg">
                    <h1 className="text-[30px] sm:text-[40px] md:text-[55px] font-bold leading-tight text-left">
                        <span className="text-white">{t('Discover, use AI')}</span>,
                    </h1>
                    <h1 className="text-[30px] sm:text-[40px] md:text-[55px] font-bold mt-2 leading-tight text-left">
                        <span className="text-white">{t('Understand legal guidelines')}</span>
                    </h1>
                    <p className="text-[16px] sm:text-[22px] md:text-[26px] text-gray-300 mt-4 text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam voluptates sed beatae?
                    </p>
                    <Link to="/startlearning">
                    <button className="mt-6 px-6 py-3 text-[14px] sm:text-[16px] md:text-[18px] border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-400">
                        {t('Start learning')}
                    </button>
                    </Link>
                   
                </div>
            </div>
        </div>
    );
}

export default HeadImage;