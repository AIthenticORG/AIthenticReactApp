import cookies from '../assets/cookies.png'

const CookiesPage = () => {
  return (
    <div className="w-full min-h-[auto] flex flex-col items-center pt-20 md:pt-28">
        {/* Hoofdingangspunt van de pagina */}
        <div className="w-[80%] max-w-7xl flex flex-col gap-16">
            {/* Container voor de eerste sectie, met flexbox om de items te positioneren */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Flexbox voor de tekstinhoud, de tekst wordt in de linkerhelft getoond */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {/* Begin van de tekstsectie */}
                    <h1 className="text-3xl md:text-5xl font-bold">Cookies Policy</h1>
                    {/* Hoofdtitel voor deze pagina */}
                    <p className="text-sm md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quaerat nisi eligendi corporis tenetur esse laborum ea non labore cupiditate quibusdam quas soluta repellendus, autem quam nobis natus aperiam!                    </p>
                    {/* Inleidende tekst over het doel van deze pagina */}
                    <p className="text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos quas molestias voluptatem modi quam! Quasi pariatur, sapiente cupiditate earum molestiae, est repellat quidem, quas nemo enim at possimus inventore!
                    </p>
                    {/* Voorbeelden van AI-technologieën die onze wereld zullen veranderen */}
                </div>
                
                <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                    {/* Rechterhelft voor de afbeelding, deze is alleen zichtbaar op grotere schermen */}
                    <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                        <img src={cookies} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                        {/* De eerste afbeelding die wordt getoond naast de tekst */}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[80%] max-w-7xl flex flex-col gap-16">
                    {/* Container voor de tweede sectie, met opnieuw flexbox voor layout */}
                    <div className="flex flex-col items-center gap-12">
                        {/* Flexbox voor de afbeelding, wordt ook op grotere schermen getoond */}
                        <div className="flex w-full lg:w-1/2 justify-center items-center">
                            
                        </div>
                        <div className=" flex flex-col gap-6 mt-[0px] md:mt-[50px]">
                            {/* De tekstsectie aan de linkerzijde van de afbeelding */}
                            <p className="text-sm md:text-base leading-relaxed">
                                <ul>
                                <li className="text-4xl font-bold">Cookie Policy</li>
                                    <li className="mt-[3%]">We use cookies on our website to enhance your browsing experience and provide you with personalized services. Cookies are small text files that are stored on your device when you visit our site. By continuing to use our website, you consent to our use of cookies in accordance with this policy.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">What are cookies?</li> Cookies are small data files that are placed on your device when you visit a website. They help websites remember your actions and preferences, such as login details, language preferences, and display settings. This makes your next visit easier and more personalized.
                                    
                                        <li>Types of cookies we use</li>
                                        <li className='mt-[1%]'><li className="text-l font-bold">Essential Cookies:</li> These cookies are necessary for the website to function properly. They allow you to navigate the site, use its features, and access secure areas. Without these cookies, some services may not be available.</li>
                                        <li className='mt-[1%]'><li className="text-l font-bold">Performance Cookies:</li> These cookies collect anonymous information about how visitors use our site, such as which pages are visited most often. This helps us improve the performance and user experience on our website.</li>
                                        <li className='mt-[1%]'><li className="text-l font-bold">Functional Cookies:</li> These cookies allow the website to remember your preferences, such as language settings or region, and provide enhanced features tailored to your needs.</li>
                                        <li className='mt-[1%]'><li className="text-l font-bold">Targeting/Advertising Cookies:</li> These cookies track your browsing habits and may be used to deliver personalized ads relevant to you. They help measure the effectiveness of advertising campaigns.</li>
                                    </li>
                                    <li className="mt-[3%]">Managing Cookies</li>
                                    <li className="mt-[3%]">You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, but please note that disabling cookies may affect your ability to use certain features of our website.</li>
                                    <li className="mt-[3%]">For more information about cookies, including how to manage or delete them, visit<li className='underline'> www.aboutcookies.org.</li></li>
                                    <li className="mt-[3%]">By using our website, you agree to our use of cookies as described in this policy.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

    </div>
  );
};

export default CookiesPage;
