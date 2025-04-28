import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import AiFinal from '../../assets/AiFinal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faX, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import HeaderMobileMenu from './HeaderMobileMenu';
import { useTranslation } from 'react-i18next';
import ENG from '../../assets/English_language.svg.png';
import NL from '../../assets/Flag_of_the_Netherlands.svg.webp';

const Header = () => {
    const {t, i18n} = useTranslation();
    
    const [activateMobileMenu, setActivateMobileMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    }
    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return(
        <header className="bg-[#0D5B58] h-[50px] xl:h-[80px] fixed flex flex-row w-[100%] z-1000">
            <div className="h-[full] w-[auto] flex flex-row items-center justify-end gap-[16px]"> 
                <Link to="/"><img draggable="false" src={AiFinal} alt="logo" className="select-none hover:scale-120 transition duration-400 ease-in-out w-[90px] lg:w-[120px] h-[35px] lg:h-[50px] ml-[16px] lg:mb-[9px]"></img></Link>
                <h1 className='hidden sm:block text-white text-1xl font-bold mr-10'>
                    <em>
                        {t('header.purpose')}
                    </em>
                </h1>
            </div>
            <nav className="hidden xl:flex flex-row w-[auto] justify-between items-center h-[80px]">
                <ul className="text-white flex flex-row gap-15 justify-between items-center">
                    <nav className='bg-[#08413f] shadow-lg px-[20px] py-[8px] rounded-[100px] hover:text-green-500 transition duration-400 ease-in-out' 
                         onMouseEnter={handleMouseEnter} 
                         onMouseLeave={handleMouseLeave}
                    >
                        <Link to='/aboutus'>{t('About us')}</Link> <FontAwesomeIcon icon={faCaretDown} className='text-white text-sm ml-1'></FontAwesomeIcon>
                    </nav>
                    {isVisible && (
                        <div className='absolute bg-[#08413f] shadow-lg w-[120px] mt-[165px] rounded-[10px] py-4'
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <ul className='flex flex-col gap-3 pl-5'>
                                <li className="hover:scale-110 hover:text-green-500 transition duration-400 ease-in-out">  
                                    <Link to='/why'>Waarom</Link>
                                </li>
                                <li className="hover:scale-110 hover:text-green-500 transition duration-400 ease-in-out">
                                    <Link to='/what'>Wat</Link>
                                </li>
                                <li className="hover:scale-110 hover:text-green-500 transition duration-400 ease-in-out">
                                    <Link to='/how'>Hoe</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/articles'>{t('Articles')}</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/faq'>{t('FAQ')}</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/podcast'>{t('Paulcast')}</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/startlearning'>{t('Start learning')}</Link>
                    </li>
                </ul>
            </nav>
        
            <div className='w-auto h-full xl:flex flex-row justify-evenly items-center absolute right-0'>
                <div className='w-auto h-full flex flex-row mr-[80px] xl:mr-[40px] items-center'>
                    <button  
                    className="bg-[#0D5B58] text-white px-4 py-2 rounded-[100px] w-[auto] h-[30px] xl:h-[40px] border-1 hover:cursor-pointer hover:bg-white border-1 hover:text-[#0D5B58] transition-all duration-300 ease-in-out"
                    onClick={() => changeLanguage(i18n.language === 'en' ? 'nl' : 'en')}
                    >
                        {i18n.language === 'en' ? <img draggable="false" src={ENG} alt="english" className="w-[25px] h-[15px] xl:w-[30px] xl:h-[20px]"></img> : <img draggable="false" src={NL} alt="dutch" className="w-[25px] h-[15px] xl:w-[30px] xl:h-[20px]"></img>}
                    </button>
                </div>

                <div className='w-auto h-auto xl:flex flex-row gap-[40px] hidden xl:mr-[30px]'>
                    <Link>
                        <button className="bg-[#0D5B58] text-white px-6 py-2 rounded-[100px] w-[auto] h-[40px] border-1 hover:cursor-pointer hover:bg-white border-1 hover:text-[#0D5B58] transition-all duration-300 ease-in-out">
                            {t('Contact')}
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className="bg-white text-[#0D5B58] px-6 py-2 rounded-lg w-[120px] h-[40px] hover:cursor-pointer hover:bg-[#0D5B58] border-1 hover:text-white transition-all duration-300 ease-in-out">
                            {t('Login')}
                        </button>
                    </Link>
                </div>
            </div>
            <div className='block w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] xl:hidden flex flex-row justify-center items-center absolute right-0'>
                <button onClick= {() => setActivateMobileMenu(!activateMobileMenu) }>
                    {!activateMobileMenu ? <FontAwesomeIcon icon={faBars} className='text-white text-3xl transition-transform duration-300 ease-in-out transform hover:rotate-45'></FontAwesomeIcon> : 
                    <FontAwesomeIcon icon={faX} className='text-white text-3xl transition-transform duration-250 ease-in-out transform rotate-180'></FontAwesomeIcon>}
                </button>
            </div>
             <HeaderMobileMenu activateMobileMenu={activateMobileMenu} />
        </header>
    )
}
export default Header;
