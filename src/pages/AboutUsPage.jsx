import aboutus from '../assets/aboutus.png';
import AssociatedCompanies from '../components/AssosiatedCompanies';

const AboutUsPage = () => {

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto lg:top-[80px] gap-[40px] relative flex flex-col lg:mb-[50px] mt-[50px]">
                <div className="w-full h-auto flex flex-col md:flex-row gap-[20px] justify-around items-center">
                    <div className="w-full lg:mt-[100px] w-1/2 lg:md:w-3/5 h-auto flex flex-col gap-[20px]">
                        <div className="w-full md:w-[70%] h-auto flex flex-col items-start justify-center mt-[30px]">
                            <h1 className='font-bold text-[32px] md:text-[48px]'>About us</h1>
                        </div>
                        <p className='w-full md:w-[85%] text-[16px] md:text-[28px]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, temporibus aliquid.
                        </p>
                        <p className='w-full md:w-[85%] text-[14px] md:text-[16px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde consequatur nihil esse iusto excepturi velit amet, maiores repellat iure. Quam iste quos sit deleniti laboriosam voluptates voluptatibus ex debitis?
                        </p>
                    </div>
                    <div className="hidden md:block w-1/2 lg:w-3/5 h-auto flex items-center mt-[60px]">
                        <img draggable="false" src={aboutus} className="select-none w-[600px] h-[auto] ml-auto" alt="Contact" />
                    </div>
                </div>
                <AssociatedCompanies />
                <div className='gap-[30px] w-full h-auto flex flex-col items-center'>
                    <p className='w-full md:w-[85%] text-[14px] md:text-[16px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, obcaecati esse! Eum, illum officia pariatur blanditiis ex sit repudiandae veniam hic ipsum quas. Voluptate provident accusantium, repellat deserunt aut qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil, iste culpa sunt molestiae dolorum sequi quas perferendis iusto, a labore. Magni quam soluta, provident ducimus similique fuga excepturi quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quod iusto quidem omnis optio odit porro! Doloribus minus iusto facere suscipit deleniti modi officia excepturi ducimus totam! Laboriosam, quas.
                    </p>
                    <p className='w-full md:w-[85%] text-[14px] md:text-[16px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, obcaecati esse! Eum, illum officia pariatur blanditiis ex sit repudiandae veniam hic ipsum quas. Voluptate provident accusantium, repellat deserunt aut qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil, iste culpa sunt molestiae dolorum sequi quas perferendis iusto, a labore. Magni quam soluta, provident ducimus similique fuga excepturi quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quod iusto quidem omnis optio odit porro! Doloribus minus iusto facere suscipit deleniti modi officia excepturi ducimus totam! Laboriosam, quas.
                    </p>
                    <p className='w-full md:w-[85%] text-[14px] md:text-[16px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, obcaecati esse! Eum, illum officia pariatur blanditiis ex sit repudiandae veniam hic ipsum quas. Voluptate provident accusantium, repellat deserunt aut qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil, iste culpa sunt molestiae dolorum sequi quas perferendis iusto, a labore. Magni quam soluta, provident ducimus similique fuga excepturi quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti quod iusto quidem omnis optio odit porro! Doloribus minus iusto facere suscipit deleniti modi officia excepturi ducimus totam! Laboriosam, quas.
                    </p>
                </div>
            </div>
        </div>
      )
}
export default AboutUsPage;