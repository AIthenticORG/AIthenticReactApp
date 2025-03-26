import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import AiFinal from '../../assets/AiFinal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faX } from '@fortawesome/free-solid-svg-icons';
import HeaderMobileMenu from './HeaderMobileMenu';
import ENG from '../../assets/English_language.svg.png';
import NL from '../../assets/Flag_of_the_Netherlands.svg.webp';

const Header = () => {

    const [activateMobileMenu, setActivateMobileMenu] = useState(false);
    const [language, setLanguage] = useState('en');

    if (activateMobileMenu){
        console.log("activateMobileMenu is true");
    }

    return(
        <header className="bg-[#0D5B58] h-[50px] xl:h-[80px] fixed flex flex-row w-[100%] z-1000">
            <div className="h-[full] w-[auto] flex flex-row items-center justify-end gap-[16px]"> 
                <Link to="/"><img draggable="false" src={AiFinal} alt="logo" className="hover:scale-120 transition duration-400 ease-in-out w-[90px] lg:w-[120px] h-[35px] lg:h-[50px] ml-[16px] lg:mb-[9px]"></img></Link>
                <h1 className='hidden sm:block text-white text-1xl font-bold mr-10'>
                    <em>
                        The AI Company
                    </em>
                </h1>
            </div>
            <nav className="hidden xl:flex flex-row w-[auto] justify-between items-center h-[80px]">
                <ul className="text-white flex flex-row gap-15 justify-between items-center">
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/aboutus'>About us</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/insights'>Blog</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-green-500 transition duration-400 ease-in-out">
                        <Link to='/faq'>FAQ</Link>
                    </li>
                </ul>
            </nav>
        
            <div className='w-auto h-full xl:flex flex-row justify-evenly items-center absolute right-0'>
                <div className='w-auto h-full flex flex-row mr-[80px] xl:mr-[40px] items-center'>
                    <button  
                    className="bg-[#0D5B58] text-white px-4 py-2 rounded-[100px] w-[auto] h-[30px] xl:h-[40px] border-1 hover:cursor-pointer hover:bg-white border-1 hover:text-[#0D5B58] transition-all duration-300 ease-in-out"
                    onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
                    >
                        {language === 'en' ? <img draggable="false" src={ENG} alt="english" className="w-[25px] h-[15px] xl:w-[30px] xl:h-[20px]"></img> : <img draggable="false" src={NL} alt="dutch" className="w-[25px] h-[15px] xl:w-[30px] xl:h-[20px]"></img>}
                    </button>
                </div>

                <div className='w-auto h-auto xl:flex flex-row gap-[40px] hidden xl:mr-[30px]'>
                    <Link>
                        <button className="bg-[#0D5B58] text-white px-6 py-2 rounded-[100px] w-[auto] h-[40px] border-1 hover:cursor-pointer hover:bg-white border-1 hover:text-[#0D5B58] transition-all duration-300 ease-in-out">
                            Contact
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className="bg-white text-[#0D5B58] px-6 py-2 rounded-lg w-[auto] h-[40px] hover:cursor-pointer hover:bg-[#0D5B58] border-1 hover:text-white transition-all duration-300 ease-in-out">
                            Login
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
