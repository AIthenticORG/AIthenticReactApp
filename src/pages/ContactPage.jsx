import React from 'react';
import contactIcon from '../assets/Contact.png';
import veli from '../assets/veli.jpeg';

const ContactPage = () => {
    return (
        <div className="w-[75%] lg:w-[60%] h-auto top-[50px] lg:top-[80px] gap-[90px] mx-[12.5%] lg:mx-[20%] relative flex flex-col items-center justify-center">
            <div className="w-full h-auto flex flex-col md:flex-row gap-[20px] items">
                <div className="w-full md:w-1/2 h-auto flex flex-col gap-[20px]">
                    <section className="w-full md:w-[70%] h-auto flex flex-col items-start justify-center mt-[50px]">
                        <h1 className='font-bold text-[34px]'>Contact us,</h1>
                        <h2 className='font-bold text-[26px]'>Check out our information</h2>
                    </section>
                    <p className='w-full md:w-[85%] text-[20px] '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, temporibus aliquid.
                        Esse ducimus eligendi officiis officia quis sint praesentium, suscipit rem incidunt. Quasi, ex! Blanditiis voluptatibus sapiente ab illo officia.
                    </p>
                </div>
                <div className="hidden md:block w-1/2 h-auto flex justify-center items-center mt-[60px]"> 
                   <img draggable="false" src={contactIcon} className="w-[400px] h-[300px]"></img>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-row lg:justify-between justify-center items-center md:w-[780px] w-full h-full mb-[50px]">

                <div className="w-[320px] h-[400px] flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-[250px] h-[250px] rounded-sm hover:scale-[1.05] transition-all duration-300 ease-in-out' src={veli} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-black font-bold text-[16px]'>Contact form</h1>
                        <p className='text-black text-[14px]'>Fill out the form below to send us a message directly. We'll get back to you as soon as possible.</p>
                    </div>
                </div>

                <div className="w-[320px] h-[400px] flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-[250px] h-[250px] rounded-sm hover:scale-[1.05] transition-all duration-300 ease-in-out' src={veli} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-black font-bold text-[16px]'>Social media</h1>
                        <p className='text-black text-[14px]'>Connect with us on social media.</p>
                    </div>
                </div>

                <div className="w-[320px] h-[400px] flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-[250px] h-[250px] rounded-sm hover:scale-[1.05] transition-all duration-300 ease-in-out' src={veli} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-black font-bold text-[16px]'>All our additional information</h1>
                        <p className='text-black text-[14px]'>For all our additional information, please feel free to explore the following resources. Whether you’re looking for details about our services, policies, or any other inquiries, we’ve got everything covered for you.</p>
                    </div>
                </div>

                <div className="w-[320px] h-[400px] flex flex-col items-center gap-[20px] text-center">
                    <img draggable="false" className='w-[250px] h-[250px] rounded-sm hover:scale-[1.05] transition-all duration-300 ease-in-out' src={veli} alt="" />
                    <div className='flex flex-col text-center text-start'>
                        <h1 className='text-black font-bold text-[18px]'>Find us on the map</h1>
                        <p className='text-black text-[14px]'>Our office location is easy to find! Check out the map. <a className='underline' href="/">Click here</a> for directions</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ContactPage;
