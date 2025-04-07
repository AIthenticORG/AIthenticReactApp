import veli from '../assets/veli.jpeg';
import bora from '../assets/bora.jpeg';
import voorbeeld1 from '../assets/voorbeeld1.jpg';
import fish from '../assets/fish.jpg';
import voorbeeld2 from '../assets/voorbeeld2.avif';
import voorbeeld3 from '../assets/voorbeeld3.jpeg';

const InfoContainer = () => {
    return (
        <div className="w-full h-[auto] flex flex-col text-center bg-gradient-to-l items-center from-[#304B66] via-[#0D5B58] to-[#1BB1AB] p-[30px]">
            <h1 className="w-auto h-auto text-[#8CC3C0] text-[23px] mt-[5px]">Blog</h1>
            <h1 className="w-auto h-auto text-white font-bold text-[25px] mt-[5px]">What our experts are saying</h1>
            <p className="w-full h-auto text-white text-[18px] mt-[5px]">Our Next Chapter in innovation, and combining communication</p>
            <div className="flex flex-wrap flex-col md:flex-row lg:justify-between gap-[40px] justify-center items-center w-full max-w-[1200px]">

                <div className="lg:w-[400px] h-[auto] flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-[30px] mt-[20px] text-center">
                    <img draggable="false" className='select-none w-[200px] h-[200px] rounded-sm' src={fish} alt="" />
                    <div className='flex flex-col text-center text-start w-[200px]'>
                        <h1 className='text-white font-bold text-[16px]'>Our Next Chapter</h1>
                        <p className='text-white text-[12px] mt-[5px] hover:text-green-500 transition duration-400 ease-in-out cursor-pointer'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={voorbeeld1} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Bora Efe<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[400px] h-[auto] flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-[30px] mt-[20px] text-center">
                    <img draggable="false" className='select-none w-[200px] h-[200px] rounded-sm' src={voorbeeld1} alt="" />
                    <div className='flex flex-col text-center text-start w-[200px]'>
                        <h1 className='text-white font-bold text-[16px]'>Our Next Mission</h1>
                        <p className='text-white text-[12px] mt-[5px] hover:text-green-500 transition duration-400 ease-in-out cursor-pointer'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={fish} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Jayro Peters<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[400px] h-[auto] flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-[30px] mt-[20px] text-center">
                    <img draggable="false" className='select-none w-[200px] h-[200px] rounded-sm' src={fish} alt="" />
                    <div className='flex flex-col text-center text-start w-[200px]'>
                        <h1 className='text-white font-bold text-[16px]'>AIthentic Vision 2025</h1>
                        <p className='text-white text-[12px] mt-[5px] hover:text-green-500 transition duration-400 ease-in-out cursor-pointer'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={voorbeeld1} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Frank Visser<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[400px] h-[auto] flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-[30px] mt-[20px] text-center">
                    <img draggable="false" className='select-none w-[200px] h-[200px] rounded-sm' src={voorbeeld1} alt="" />
                    <div className='flex flex-col text-center text-start w-[200px]'>
                        <h1 className='text-white font-bold text-[16px]'>Our Next Flibus</h1>
                        <p className='text-white text-[12px] mt-[5px] hover:text-green-500 transition duration-400 ease-in-out cursor-pointer'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={fish} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Bill Clinton<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoContainer;
