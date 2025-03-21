import HomePageImage from '../assets/AchtergrondPNG.jpg';
import ImageSlider from '../components/LogoSlider/ImageSlider';
import InfoContainer from '../components/InfoContainer'
import StartLearningContainer from '../components/StartLearningContainer';
import AssociatedCompanies from '../components/AssosiatedCompanies';

const HomePage = () => {
    return(
        <div className="w-full h-auto flex flex-col">
            <img draggable="false" src={HomePageImage} className="w-full h-[100vh] object-cover" alt="HomePageImage"> 
            </img>  
            <StartLearningContainer/>
            <ImageSlider/>
            <InfoContainer/>
            <AssociatedCompanies/>
        </div>

    )
}
export default HomePage;  