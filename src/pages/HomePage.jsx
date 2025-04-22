import ImageSlider from "../components/LogoSlider/ImageSlider";
import InfoContainer from "../components/InfoContainer";
import StartLearningContainer from "../components/StartLearningContainer";
import AssociatedCompanies from "../components/AssosiatedCompanies";
import SubscriptionsSlider from "../components/SubscriptionsSlider/SubscriptionsSlider";
import ServicesContainer from "../components/ServicesContainer";
import HeadImage from "../components/HeadImage";

const HomePage = () => {
  
  return (
    <>
        <HeadImage />
        <StartLearningContainer />
        <ServicesContainer />
        <SubscriptionsSlider />
        <InfoContainer />
        <ImageSlider />
        <AssociatedCompanies />
    </>
  );
};

export default HomePage;
