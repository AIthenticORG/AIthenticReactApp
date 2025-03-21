import learn from '../assets/learn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const StartLearning = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-full flex flex-row items-center justify-center bg-[#1BB1AB]">
        <div className='flex flex-col items-start justify-center w-1/2 h-auto gap-[20px]'>
            <div className='w-2/3 h-auto flex flex-col items-start justify-center gap-[20px]'>
                <h1 className='text-white font-bold text-[48px]'>Start Learning, by using AI</h1>
                <p className='text-white text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, incidunt? Doloremque adipisci consequuntur quas voluptatibus sapiente nam vitae rem? Modi, minima. Eos optio porro ab sed ipsa consequatur ipsum maxime.</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-row items-center gap-[20px]'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white text-xl'></FontAwesomeIcon>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem necessitatibus sequi minus eos nulla obcaecati sit vitae, ipsam voluptatem asperiores eum maiores excepturi, fugiat, officia a in illo veritatis?</p>
                </div>
                <div className='flex flex-row items-center gap-[20px]'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white text-xl'></FontAwesomeIcon>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem necessitatibus sequi minus eos nulla obcaecati sit vitae, ipsam voluptatem asperiores eum maiores excepturi, fugiat, officia a in illo veritatis?</p>
                </div>
            </div>
            <button className='border border-[1px] border-white rounded-[40px] p-2 text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-300 ease in out'>Start Learning</button>
        </div>
        <img className='w-1/4' src={learn} alt="" />
    </div>
  );
}
export default StartLearning;