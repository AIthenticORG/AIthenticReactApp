import HomePageImage from '../assets/AchtergrondPNG.jpg';
import ImageSlider from '../components/LogoSlider/ImageSlider';
import InfoContainer from '../components/InfoContainer'
import StartLearningContainer from '../components/StartLearningContainer';
import AssociatedCompanies from '../components/AssosiatedCompanies';
import PartnerList from '../components/PartnerList/PartnerList';

const HomePage = () => {
    return(
        <div className="w-full h-auto flex flex-col">
            <img draggable="false" src={HomePageImage} className="w-full h-[100vh] object-cover" alt="HomePageImage"/> 
            <StartLearningContainer/>
            <ImageSlider/>
            <InfoContainer/>
            <AssociatedCompanies/>
            <PartnerList/>
        </div>

    )
}
export default HomePage;  