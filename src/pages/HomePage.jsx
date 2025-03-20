import HomePageImage from '../assets/AchtergrondPNG.jpg';
import ImageSlider from '../components/LogoSlider/ImageSlider';
import InfoContainer from '../components/InfoContainer'

const HomePage = () => {
    return(
        <div className="w-full h-auto flex flex-col">
            <img draggable="false" src={HomePageImage} className="w-full h-[80vh] object-cover" alt="HomePageImage"> 
            </img>  
            <ImageSlider/>
            <InfoContainer/>
        </div>

    )
}
export default HomePage;  