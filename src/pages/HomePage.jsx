import HomePageImage from '../assets/AchtergrondPNG.jpg';
import ImageSlider from '../components/LogoSlider/ImageSlider';
import InfoContainer from '../components/InfoContainer'
import AssociatedCompanies from '../components/AboutUsSlider';

const HomePage = () => {
    return(
        <div className="w-full h-auto flex flex-col">
            <img src={HomePageImage} className="w-full h-[80vh] object-cover" alt="HomePageImage"> 
            </img>  
            <ImageSlider/>
            <InfoContainer/>
            <AssociatedCompanies/>
        </div>


    )
}
export default HomePage;  