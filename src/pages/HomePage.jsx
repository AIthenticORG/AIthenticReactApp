import ImageSlider from "../components/LogoSlider/ImageSlider"; // Slider voor logo's
import InfoContainer from "../components/InfoContainer"; // Informatiecontainer met details
import StartLearningContainer from "../components/StartLearningContainer"; // Sectie om te beginnen met leren
import AssociatedCompanies from "../components/AssosiatedCompanies"; // Lijst van geassocieerde bedrijven
import SubscriptionsSlider from "../components/SubscriptionsSlider/SubscriptionsSlider"; // Slider voor abonnementen
import TimeLine from "../components/TimeLine/TimeLine"; // Tijdlijncomponent voor het tonen van gebeurtenissen
import ServicesContainer from "../components/ServicesContainer"; // Container voor aangeboden diensten
import HeadImage from "../components/HeadImage"; // Afbeelding bovenaan de pagina
import OurMission from "../components/OurMission"; // Sectie die de missie van het bedrijf beschrijft

const HomePage = () => {
  return (
    <>
        {/* Hoofdafbeelding bovenaan de pagina */}
        <HeadImage />
        
        {/* Sectie die de missie van het bedrijf uitlegt */}
        <OurMission />

        <TimeLine/>
        
        {/* Container voor de diensten die het bedrijf aanbiedt */}
        <ServicesContainer />
        
        {/* Algemene informatie container */}
        <InfoContainer />
        
        {/* Slider voor het tonen van logo's */}
        <ImageSlider />
        
        {/* Lijst van geassocieerde bedrijven */}
        <AssociatedCompanies />
    </>
  );
};

export default HomePage;
