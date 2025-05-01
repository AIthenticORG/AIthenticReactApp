import ImageSlider from "../components/LogoSlider/ImageSlider";
import InfoContainer from "../components/InfoContainer";
import StartLearningContainer from "../components/StartLearningContainer";
import AssociatedCompanies from "../components/AssosiatedCompanies";
import SubscriptionsSlider from "../components/SubscriptionsSlider/SubscriptionsSlider";
import ServicesContainer from "../components/ServicesContainer";
import HeadImage from "../components/HeadImage";
import OurMission from "../components/OurMission";

const HomePage = () => {
  
  return (
    <>
        <HeadImage />
        <OurMission />
        <ServicesContainer />
        <InfoContainer />
        <ImageSlider />
        <AssociatedCompanies />
    </>
  );
};

export default HomePage;