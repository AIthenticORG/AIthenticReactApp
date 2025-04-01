import veli from '../assets/veli.jpeg';
import bora from '../assets/bora.jpeg';
import voorbeeld1 from '../assets/voorbeeld1.jpg';
import fish from '../assets/fish.jpg';
import voorbeeld2 from '../assets/voorbeeld2.avif';
import voorbeeld3 from '../assets/voorbeeld3.jpeg';

const InfoContainer = () => {
    return (
        <div className="w-[100%] h-auto flex flex-col text-center bg-gradient-to-l items-center from-[#304B66] via-[#0D5B58] to-[#1BB1AB] p-[20px]">
            <h1 className="w-auto h-auto text-[#8CC3C0] text-[23px] mt-[5px]">Blog</h1>
            <h1 className="w-auto h-auto text-white font-bold text-[25px] mt-[5px]">What our experts are saying</h1>
            <p className="w-full h-auto text-white text-[18px] mt-[5px]">Our Next Chapter in innovation, and combining communcation</p>
            <div className="flex flex-wrap md:flex-column justify-evenly gap-[20px] items-center md:w-[780px] w-full h-full">

                <div className="w-[320px] h-[200px] flex flex-row items-center gap-[30px] text-center hover:scale-[1.05] transition-all duration-300 ease-in-out">
                    <img draggable="false" className='select-none w-[150px] h-3/4 rounded-sm' src={fish} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-white font-bold text-[16px]'>Our Next Chapter</h1>
                        <p className='text-white text-[12px] mt-[5px]'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={fish} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Bora Efe<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

                <div className="w-[320px] h-[200px] flex flex-row items-center gap-[30px] text-center hover:scale-[1.05] transition-all duration-300 ease-in-out">
                    <img draggable="false" className='select-none w-[150px] h-3/4 rounded-sm' src={voorbeeld1} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-white font-bold text-[16px]'>Our Next Mission</h1>
                        <p className='text-white text-[12px] mt-[5px]'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={fish} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Jayro Peters<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

                <div className="w-[320px] h-[200px] flex flex-row items-center gap-[30px] text-center hover:scale-[1.05] transition-all duration-300 ease-in-out">
                    <img draggable="false" className='select-none w-[150px] h-3/4 rounded-sm' src={voorbeeld2} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-white font-bold text-[16px]'>AIthentic Vision 2025</h1>
                        <p className='text-white text-[12px] mt-[5px]'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={fish} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Frank Visser<br />19-03-2025</p>
                        </div>
                    </div>
                </div>  

                <div className="w-[320px] h-[200px] flex flex-row items-center gap-[30px] text-center hover:scale-[1.05] transition-all duration-300 ease-in-out">
                    <img draggable="false" className='select-none w-[150px] h-3/4 rounded-sm' src={voorbeeld3} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-white font-bold text-[16px]'>Our Next Flibus</h1>
                        <p className='text-white text-[12px] mt-[5px]'>Read more &gt;</p>
                        <div className='flex flex-row items-center text-start'>
                            <img draggable="false" className='select-none rounded-full w-[30px]' src={fish} alt="" />
                            <p className='text-white text-[12px] mt-[10px] ml-[10px]'>Bill Clinton<br />19-03-2025</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    );
    }
export default InfoContainer;