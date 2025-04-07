import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons';

const HeaderMobileMenu = ({activateMobileMenu}) => {
    return(
        <nav className={`block w-[100vw] h-[calc(100vh-50px)] xl:h-[calc(100vh-80px)] bg-[#0D5B58] flex flex-col justify-evenly fixed top-[50px] xl:top-[80px] z-50 pl-[20px] pr-[20px] border-t-[1px] border-white xl:hidden 
            transform ${activateMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-y-auto`}>
            <ul className="text-white text-[18px] flex flex-col gap-[20px] justify-between width-[100%] h-auto mt-[30px]">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About us</Link>
                </li>
                <li>    
                    <Link to='/'>Insights</Link>
                </li>
                <li>
                    <Link to='/'>Articles</Link>
                </li>
                <li>
                    <Link to='/'>Paulcast</Link>
                </li>
            </ul>
            <div className='w-[100%] h-[1px] bg-white mt-[20px]'></div>
            <div className='w-[100%] h-[400px] flex flex-col'>
                <div className='w-[100%] h-full flex flex-col justify-evenly'>
                    <p className='text-white flex flex-row items-center gap-x-[20px] text-[16px]'><FontAwesomeIcon icon={faPhone} className="text-white text-[20px]"/>0503-3004</p>
                    <p className='text-white flex flex-row items-center gap-x-[20px] text-[16px]'><FontAwesomeIcon icon={faEnvelope} className="text-white text-[20px]"/>bora.e@icloud.com</p>
                </div>
                <div className="w-[100%] h-full flex flex-col justify-evenly">
                    <Link>
                        <button className="bg-[#0D5B58] text-white py-2 rounded-lg w-full h-[45px] border-1 hover:cursor-pointer hover:bg-white border-1 hover:text-black transition-all duration-300 ease-in-out">
                            Contact
                        </button>
                    </Link>
                    <Link>
                        <button className="bg-white text-[#0D5B58] rounded-lg w-full h-[45px] hover:cursor-pointer hover:bg-[#0D5B58] border-1 hover:text-white transition-all duration-300 ease-in-out">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default HeaderMobileMenu;