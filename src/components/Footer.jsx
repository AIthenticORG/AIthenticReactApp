
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, fa42Group, faFacebookSquare, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import AiFinal from '../assets/AiFinal.png';
import { Link, Links } from 'react-router-dom';
import PartnerList from './PartnerList/PartnerList';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (    
        
        <footer className="h-[auto] w-[100%] flex bg-[#1BB1AB] flex-col bottom-0 items-center mt-[50px]">
            <PartnerList />
            
            <div className="w-full h-[400px] sm:h-[250px] lg:w-9/10 bg-[#0D5B58] relative rounded-t-[50px] flex flex-col items-center justify-center mt-[50px]">

                <div className='block w-[70%] sm:h-[30%] mt-[10px] sm:mt-[0px] h-auto top-0 absolute 2xl:hidden text-white flex sm:flex-row flex-col justify-center items-center gap-[10px]'>
                    <h1 className='sm:w-[120px] font-bold '>Subscribe to our newsletter!</h1>
                    <input className='h-[40px] p-[5px] rounded-3xl border-[1px] border-white outline-none' placeholder='Your email..' type="email" />
                    <button className='h-[40px] pl-[20px] pr-[20px] rounded-3xl border-[1px] border-white hover:cursor-pointer outline-none'>Subscribe</button>
                </div>
                
                
                <div className="hidden 2xl:flex flex-row justify-between items-center w-1/2 h-[100px] bg-gradient-to-r items-center from-[#304B66] via-[#0D5B58] to-[#1BB1AB] rounded-xl absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-l from-[#5EE6E0] to-[#113F45]">
                    <img draggable="false" src={AiFinal} alt="logo" className="select-none hidden 2xl:block w-[160px] h-[70px] ml-[30px]"></img>
                    <div className='flex flex-row items-center text-white mr-10 gap-[10px]'>
                        <h1 className='w-[120px] font-bold'>Subscribe to our newsletter</h1>
                        <input className='h-[40px] p-[5px] rounded-3xl border-[1px] border-white outline-none' placeholder='Your email..' type="email" />
                        <button className='h-[40px] pl-[20px] pr-[20px] rounded-3xl border-[1px] border-white bg hover:cursor-pointer outline-none hover:bg-white hover:text-[#0D5B58] transition duration-400 ease-in-out' type='submit'>Subscribe</button>
                    </div>
                </div>

                <div className="flex flex-wrap mb-[30px] sm:mb-[0px] sm:flex-row sm:w-9/10 lg:w-[1000px] h-auto sm:h-[70%] bottom-0 absolute items-center text-white">
                    <nav className="w-1/2 sm:w-1/4 h-[80%] flex flex-col items-center sm:border-r-[1px] sm:border-white p-[5px]">
                      <h2 className='font-bold'>{t('Get connected')}</h2>
                      <ul className="flex flex-col items-center w-[100%] h-[100%]">
                        <li>
                            <Link to='/contact'>
                                {t('Contact')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/support'>
                                {t('Support')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/faq'>
                                {t('FAQ')}
                            </Link>
                        </li>
                      </ul>
                    </nav>
                    <nav className="w-1/2 sm:w-1/4 h-[80%] flex flex-col items-center sm:border-r-[1px] sm:border-white p-[5px]">
                      <h2 className='font-extrabold'>{t('Company')}</h2>
                      <ul className="flex flex-col items-center w-[100%] h-[100%]">
                        <li>
                            <Link to='/aboutus'>
                                {t('About us')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/articles'>
                                {t('Articles')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/podcast'>
                                {t('Paulcast')}
                            </Link>
                        </li>
                      </ul>
                    </nav>
                    <nav className="w-1/2 sm:w-1/4 h-[80%] flex flex-col items-center p-[5px]">
                      <h2 className='font-extrabold'>{t('Plans')}</h2>
                      <ul className="flex flex-col items-center w-[100%] h-[100%] ">
                        <li>
                            <Link to='/pricing'>
                                {t('Our plans')}
                            </Link>
                        </li>
                      </ul>
                    </nav>
                    <nav className="w-1/2 sm:w-1/4 h-[80%] flex flex-col items-center sm:border-l-[1px] sm:border-white p-[5px]">
                      <h2 className='font-extrabold'>{t('Socials')}</h2>
                      <ul className="flex flex-col items-center w-[100%] h-[100%]">
                        <li>
                            <Link to="https://www.google.nl/?hl=nl" target='_blank'>
                                 {t('LinkedIn')}
                            </Link>
                        </li>
                        <li>
                            <Link to="https://x.com/ai_thentic" target='_blank'>
                                 {t('X')}
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.google.nl/?hl=nl" target='_blank'>
                                 {t('Instagram')}
                            </Link>
                        </li>
                      </ul>    
                    </nav>
                </div>
            </div>
            <div className="w-1/1 lg:w-9/10 h-[auto] sm:h-[50px] flex flex-row bg-[#0D5B58] border-t-[1px] border-white items-center justify-center">
                <div className="flex-col  sm:gap-[30px] lg:w-[880px] sm:h-[50px] flex sm:flex-row items-center justify-between">
                     <nav className="hidden sm:block text-white">
                        <ul className="flex flex-row gap-[40px] items-center">
                            <li>
                                <Link to='https://www.google.nl/?hl=nl' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-[#0077b5] transition duration-400 ease-in-out"/>
                                </Link>
                            </li>
                            <li>
                                <Link to='https://x.com/ai_thentic' target='_blank'>
                                <FontAwesomeIcon icon={faSquareXTwitter} className="text-2xl hover:text-black transition duration-400 ease-in-out"/>
                                </Link>
                            </li>
                            <li>
                                <Link to='https://www.google.nl/?hl=nl' target='_blank'>
                                <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl hover:text-[#1877F2] transition duration-400 ease-in-out"/>
                                </Link>
                            </li>
                        </ul>
                     </nav>
                     <p className="w-[auto] h-[auto] text-white text-center font-bold">
                        © 2025 AIthentic                
                    </p>
                    <nav className="flex flex-row gap-[20px] items-center text-white w-[auto] h-[50px]">
                        <ul className="flex flex-row gap-[20px] items-center">
                            <li className="hover:no-underline underline hover:text-green-500 transition duration-400 ease-in-out cursor-pointer">
                                Privacy
                            </li>
                            <li className="hover:no-underline underline hover:text-green-500 transition duration-400 ease-in-out cursor-pointer">
                                Terms
                            </li>
                            <li className="hover:no-underline underline hover:text-green-500 transition duration-400 ease-in-out cursor-pointer">
                                Cookies
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer;