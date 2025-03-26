import React from 'react';
import contactIcon from '../assets/Contact.png';
import maps from '../assets/maps.png';
import socials from '../assets/socials.jpeg';
import { div } from 'framer-motion/client';

const ContactPage = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center">
            <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto top-[50px] lg:top-[80px] gap-[90px] relative flex flex-col">
                <div className="w-full h-auto flex flex-col md:flex-row gap-[20px] justify-around items-center">
                    <div className="w-full lg:mt-[100px] w-1/2 lg:md:w-3/5 h-auto flex flex-col gap-[20px]">
                        <div className="w-full md:w-[70%] h-auto flex flex-col items-start justify-center mt-[30px]">
                            <h1 className='font-bold text-[32px] md:text-[40px]'>Contact us,</h1>
                            <h2 className='font-bold text-[24px] md:text-[32px]'>Check out our information</h2>
                        </div>
                        <p className='w-full md:w-[85%] text-[16px] md:text-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, temporibus aliquid.
                        </p>
                        <p className='w-full md:w-[85%] text-[14px] md:text-[16px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde consequatur nihil esse iusto excepturi velit amet, maiores repellat iure. Quam iste quos sit deleniti laboriosam voluptates voluptatibus ex debitis?
                        </p>
                    </div>
                    <div className="hidden md:block w-1/2 lg:w-2/5 h-auto flex items-center mt-[60px]">
                        <img draggable="false" src={contactIcon} className="select-none w-[400px] h-[300px] ml-auto" alt="Contact" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-30 gap-y-20 w-full h-full mb-[80px]">
                    <div className="flex flex-col items-center gap-[20px] text-center">
                        <img draggable="false" className='select-none w-full h-auto rounded-[30px] hover:scale-[1.02] transition-all duration-300 ease-in-out' src={maps} alt="" />
                        <div className='flex flex-col text-start w-full'>
                            <h1 className='text-black font-bold text-[24px]'>Contact form</h1>
                            <p className='text-black text-[18px]'>Fill out the form below to send us a message directly. We'll get back to you as soon as possible.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[20px] text-center">
                        <img draggable="false" className='select-none w-full h-auto rounded-[30px] hover:scale-[1.02] transition-all duration-300 ease-in-out' src={socials} alt="" />
                        <div className='flex flex-col text-start w-full'>
                            <h1 className='text-black font-bold text-[24px]'>Social media</h1>
                            <p className='text-black text-[18px]'>Connect with us on social media.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[20px] text-center">
                        <img draggable="false" className='select-none w-full h-auto rounded-[30px] hover:scale-[1.02] transition-all duration-300 ease-in-out' src={maps} alt="" />
                        <div className='flex flex-col text-start w-full'>
                            <h1 className='text-black font-bold text-[24px]'>All our additional information</h1>
                            <p className='text-black text-[18px]'>For all our additional information, please feel free to explore the following resources.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[20px] text-center">
                        <img draggable="false" className='select-none w-full h-auto rounded-[30px] hover:scale-[1.02] transition-all duration-300 ease-in-out' src={maps} alt="" />
                        <div className='flex flex-col text-start w-full'>
                            <h1 className='text-black font-bold text-[24px]'>Find us on the map</h1>
                            <p className='text-black text-[18px]'>Our office location is easy to find! <a className='underline hover:no-underline hover:text-green-500 transition duration-500' target="blank_" rel='noopener noreferrer' href="https://www.google.com/maps/place/Kerkenbos+1001,+6546+BB+Nijmegen/@51.8271648,5.785693,17z/data=!3m1!4b1!4m6!3m5!1s0x47c7064f91b225d9:0x71533d3d9c831f5d!8m2!3d51.8271648!4d5.7882679!16s%2Fg%2F11csfz9k5q?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D">Click here</a> for directions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
