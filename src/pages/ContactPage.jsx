import React from 'react';
import contactIcon from '../assets/Contact.png';
import maps from '../assets/maps.png';

const ContactPage = () => {
    return (
        <div className="w-[75%] lg:w-[60%] h-auto top-[50px] lg:top-[80px] gap-[90px] mx-[12.5%] lg:mx-[20%] relative flex flex-col items-center justify-center">
            <div className="w-full h-auto flex flex-col md:flex-row gap-[20px] justify-evenly">
                <div className="w-full md:w-1/2 h-auto flex flex-col gap-[20px]">
                    <section className="w-full md:w-[70%] h-auto flex flex-col items-start justify-center mt-[50px]">
                        <h1 className='font-bold text-[34px]'>Contact us,</h1>
                        <h2 className='font-bold text-[26px]'>Check out our information</h2>
                    </section>
                    <p className='w-full md:w-[85%] text-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, temporibus aliquid.
                        Esse ducimus eligendi officiis officia quis sint praesentium, suscipit rem incidunt. Quasi, ex! Blanditiis voluptatibus sapiente ab illo officia.
                    </p>
                </div>
                <div className="hidden md:block w-1/2 h-auto flex items-center mt-[60px]">
                    <img draggable="false" src={contactIcon} className="w-[400px] h-[300px] ml-auto" alt="Contact" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-30 gap-y-20 w-full h-full mb-[80px]">
                <div className="flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-full h-auto rounded-[30px] hover:scale-[1.05] transition-all duration-300 ease-in-out' src={maps} alt="" />
                    <div className='flex flex-col text-start w-full'>
                        <h1 className='text-black font-bold text-[16px]'>Contact form</h1>
                        <p className='text-black text-[14px]'>Fill out the form below to send us a message directly. We'll get back to you as soon as possible.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-full h-auto rounded-[30px] hover:scale-[1.05] transition-all duration-300 ease-in-out' src={maps} alt="" />
                    <div className='flex flex-col text-start w-full'>
                        <h1 className='text-black font-bold text-[16px]'>Social media</h1>
                        <p className='text-black text-[14px]'>Connect with us on social media. Connect with us on social media.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-full h-auto rounded-[30px] hover:scale-[1.05] transition-all duration-300 ease-in-out' src={maps} alt="" />
                    <div className='flex flex-col text-start w-full'>
                        <h1 className='text-black font-bold text-[16px]'>All our additional information</h1>
                        <p className='text-black text-[14px]'>For all our additional information, please feel free to explore the following resources.</p>

                    </div>
                </div>

                <div className="flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-full h-auto rounded-[30px] hover:scale-[1.05] transition-all duration-300 ease-in-out' src={maps} alt="" />
                    <div className='flex flex-col text-start w-full'>
                        <h1 className='text-black font-bold text-[16px]'>Find us on the map</h1>
                        <p className='text-black text-[14px]'>Our office location is easy to find! <a className='underline hover:no-underline hover:text-green-500 transition duration-500' target="blank_" rel='noopener noreferrer' href="https://www.google.com/maps/place/Kerkenbos+1001,+6546+BB+Nijmegen/@51.8271648,5.785693,17z/data=!3m1!4b1!4m6!3m5!1s0x47c7064f91b225d9:0x71533d3d9c831f5d!8m2!3d51.8271648!4d5.7882679!16s%2Fg%2F11csfz9k5q?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D">Click here</a> for directions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
