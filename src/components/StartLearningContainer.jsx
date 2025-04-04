import learn from '../assets/learn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const StartLearning = () => {
  return (
    <div className="lg:h-[calc(100vh-80px)] h-auto w-full flex flex-row items-center justify-evenly bg-[#1BB1AB] p-4">
        <div className='flex flex-col items-center sm:items-start justify-center w-full lg:w-1/2 h-auto gap-[20px]'>
            <div className='w-1/1 h-auto flex flex-col sm:items-start items-center justify-center gap-[20px]'>
                <h1 className='text-white font-bold text-[38px] xl:text-[48px] text-center sm:text-start'>Start Learning, by using AI</h1>
                <p className='text-white w-6/7 lg:w-3/4 text-[14px] xl:text-[18px] text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt? Doloremque adipisci consequuntur quas voluptatibus sapiente nam vitae rem? Modi, minima. Eos optio porro ab sed ipsa consequatur ipsum maxime.</p>
            </div>
            <div className='flex flex-col gap-[10px] text-[14px] items-center sm:items-start'>

                <div className='flex flex-col lg:w-full w-4/5 sm:flex-row items-center sm:items-start gap-[20px] sm:mt-[20px] mt-[30px]'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white text-xl md:text-2xl'></FontAwesomeIcon>
                    <p className='text-white text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem necessitatibus sequi minus eos nulla obcaecati sit vitae, ipsam voluptatem asperiores eum maiores excepturi, fugiat, officia a in illo veritatis?</p>
                </div>

                <div className='flex flex-col lg:w-full w-4/5 sm:flex-row items-center sm:items-start gap-[20px] sm:mt-[20px] mt-[30px]'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white text-xl md:text-2xl'></FontAwesomeIcon>
                    <p className='text-white text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem necessitatibus sequi minus eos nulla obcaecati sit vitae, ipsam voluptatem asperiores eum maiores excepturi, fugiat, officia a in illo veritatis?</p>
                </div>

            </div>
            <button className='border border-[1px] border-white rounded-[40px] p-2 text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-300 ease in out'>Start Learning</button>
        </div>
        <img className='select-none w-1/4 hidden lg:block' draggable="false" src={learn} alt="" />
    </div>
  );
}
export default StartLearning;