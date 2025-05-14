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
                                <li className="text-4xl font-bold">1. Privacy Policy</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.1 Information We Collect</li> We may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide when using our services or contacting us. Additionally, we may collect non-personal information such as your IP address, browser type, device information, and usage data to improve our services and provide a better user experience.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.2 How We Use Your Information</li> The information we collect is used to:
                                        <li>- Provide and improve our services</li>
                                        <li>- Respond to inquiries or support requests</li>
                                        <li>- Send you updates, promotions, and important notifications (if you have opted in)</li>
                                        <li>- Customize your user experience</li>
                                        <li>- Analyze website usage and enhance functionality</li>
                                    </li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.3 Sharing Your Information</li>We respect your privacy and will not sell, rent, or trade your personal information. We may share your information with trusted third-party service providers who assist us in running our business, such as hosting, analytics, and payment processing, but only to the extent necessary to fulfill our services. We will ensure these parties are committed to maintaining your privacy.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.4 Data Security</li> We take reasonable steps to protect your personal information using industry-standard security measures, including encryption and secure data storage. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.5 Cookies and Tracking Technologies</li> Our website uses cookies and similar tracking technologies to enhance user experience, analyze website usage, and deliver targeted content. You can adjust your browser settings to block or delete cookies, but some features of the website may not function properly without them.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.6 Your Rights</li> You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights, please contact us directly. You may also opt out of marketing communications at any time by following the unsubscribe instructions included in our emails.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">1.7 Changes to the Privacy Policy</li>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page with an updated "Last Revised" date. We encourage you to review this policy periodically.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

    </div>
  );
};

export default CookiesPage;
