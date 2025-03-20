import mac from '../../assets/Naamloos-2.png';
import google from '../../assets/Naamloos-3.png';
import cocacola from '../../assets/Naamloos-4.png';
import xbox from '../../assets/Naamloos-5.png';
import nike from '../../assets/Naamloos-6.png';
import bora2 from '../../assets/Naamloos-7.png';
import spz from '../../assets/Naamloos-8.png';
import bora from '../../assets/bora.jpeg';
import jayro from '../../assets/jayro.png';
import ImageSliderItems from './ImageSliderItems';

const ImageSlider = () => {
    const images = [
        mac, google, jayro, cocacola, xbox, nike, bora2, spz,
        mac, google, jayro, cocacola, xbox, nike, bora2, spz,
    ];


    return (
        <div className="w-[full] h-[320px] lg:h-[400px] bg-gradient-to-r from-gray-300 via-white to-gray-200 flex flex-col items-center justify-evenly">
            <h1 className='text-[#0D5B58] text-[25px] lg:text-[32px] font-bold text-center'>These companies didn't hesitate</h1>
            <ImageSliderItems images={images} from={0} to={"-100%"}/>
        </div>
    );
}   
export default ImageSlider;