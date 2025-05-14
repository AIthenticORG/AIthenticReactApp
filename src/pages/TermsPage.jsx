import terms from '../assets/terms.png'

const TermsPage = () => {
  return (
    <div className="w-full min-h-[auto] flex flex-col items-center pt-20 md:pt-28">
        {/* Hoofdingangspunt van de pagina */}
        <div className="w-[80%] max-w-7xl flex flex-col gap-16">
            {/* Container voor de eerste sectie, met flexbox om de items te positioneren */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Flexbox voor de tekstinhoud, de tekst wordt in de linkerhelft getoond */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {/* Begin van de tekstsectie */}
                    <h1 className="text-3xl md:text-5xl font-bold">Waarom?</h1>
                    {/* Hoofdtitel voor deze pagina */}
                    <p className="text-sm md:text-lg leading-relaxed">
                        Dit is onze 'Waarom' pagina. Hier leggen we uit waarom we doen wat we doen. Lees verder voor meer.
                    </p>
                    {/* Inleidende tekst over het doel van deze pagina */}
                    <p className="text-sm md:text-base leading-relaxed">
                        De toekomst van de gezondheidszorg is intelligent. Artificial Intelligence (AI) staat op het punt om alles op zijn kop te zetten, van diagnostiek en behandeling tot patiëntenzorg en administratieve efficiëntie. Navigeren door dit complexe landschap kan overweldigend aanvoelen, zelfs neigend tot identiteitsverlies van personen en organisaties. Wanneer er iets in de maatschappij verandert, passen we ons meestal aan.
                    </p>
                    {/* Uitleg over de impact van AI op de gezondheidszorg en de maatschappij */}
                    <p className="text-sm md:text-base leading-relaxed">
                        Wanneer baanbrekende apparaten of machines, voorzien van AI, op de markt komen ontmoeten we AI. Denk aan robots, zelfsturende auto’s of drones. Hun programma’s leren van de omgeving waar ze zijn en nemen die informatie mee in het maken van beslissingen. Vooral binnen domeinen zoals gezondheidszorg, wetenschappelijk onderzoek, communicatie, transport, productie of defensie zal dat merkbaar zijn.
                    </p>
                    {/* Voorbeelden van AI-technologieën die onze wereld zullen veranderen */}
                </div>
                
                <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                    {/* Rechterhelft voor de afbeelding, deze is alleen zichtbaar op grotere schermen */}
                    <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                        <img src={terms} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
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
                                {/* 2 terms of service list */}
                                <ul className="mt-[7%]">
                                    
                                    <li className="text-4xl font-bold">2. Terms of Service</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.1 Acceptance of Terms</li>By accessing or using our website, you agree to be bound by these Terms of Service and any applicable laws. If you do not agree with any part of these terms, you must refrain from using our website.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.2 Use of Website</li>You agree to use the website in accordance with all applicable laws and regulations. You are prohibited from using the website for any unlawful or prohibited activities, including but not limited to:
                                        <li>- Violating any applicable local, national, or international laws</li>
                                        <li>- Distributing harmful or illegal content</li>
                                        <li>- nterfering with the website's functionality or security</li>
                                        <li>- Engaging in activities that could damage or disrupt the website or servers</li>
                                    </li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.3 Account Registration</li>Certain features of our website may require you to create an account. You agree to provide accurate, current, and complete information during the registration process and to update your account details as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.4 Intellectual Property</li>The content, graphics, logos, and trademarks on this website are the property of the company or our partners and are protected by intellectual property laws. You may not use, reproduce, or distribute any of these materials without express written permission.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.5 Termination of Access</li>We reserve the right to suspend or terminate your access to the website at our discretion if we believe you have violated these Terms of Service.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.6 Limitation of Liability</li>Our website is provided on an "as is" and "as available" basis. We do not guarantee that the website will be uninterrupted, error-free, or free from viruses. We will not be liable for any direct, indirect, incidental, or consequential damages arising from your use or inability to use the website.</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.7 Governing Law</li>These Terms of Service are governed by the laws of [Your Country], without regard to its conflict of law principles. Any disputes arising from these terms will be resolved in the appropriate courts located in [Your Jurisdiction].</li>
                                    <li className="mt-[3%]"><li className="text-xl font-bold">2.8 Changes to the Terms of Service</li>We may update or modify these Terms of Service at any time. Any changes will be posted on this page, and the revised date will be indicated at the top. We encourage you to review these terms periodically</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

    </div>
  );
};

export default TermsPage;
