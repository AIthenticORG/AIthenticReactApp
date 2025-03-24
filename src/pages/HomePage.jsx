import HomePageImage from '../assets/AchtergrondPNG.jpg';
import ImageSlider from '../components/LogoSlider/ImageSlider';
import InfoContainer from '../components/InfoContainer'
import StartLearningContainer from '../components/StartLearningContainer';
import AssociatedCompanies from '../components/AssosiatedCompanies';

const HomePage = () => {
    return(

            <div className="relative w-full h-auto flex flex-col">
        <div className="relative w-full h-[80vh]">
            <img
            src={HomePageImage}
            className="w-full h-full object-cover"
            alt="HomePageImage"
            />
            <div className="absolute top-1/4 left-10 text-white max-w-xl">
            <h1 className="text-4xl font-bold">
                <span className="text-white">Discover</span>, <span className="text-gray-300">use AI</span>,
            </h1>
            <h1 className="text-4xl font-bold mt-2">
                <span className="text-white">Understand</span> <span className="text-gray-300">legal guidelines.</span>
            </h1>
            <p className="text-gray-300 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam
                voluptates sed beatae?
            </p>
            <button className="mt-6 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                Start learning
            </button>
            </div>
        </div>
        <StartLearningContainer/>
        <ImageSlider />
        <InfoContainer />
        <AssociatedCompanies />
        </div>

    )
}
export default HomePage;  