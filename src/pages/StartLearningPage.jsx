import { div } from 'framer-motion/client';
import React from 'react';
import QuestionBubble from '../assets/QuestionBubble.png';
import learn from '../assets/learn.png';
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowDown, faWrench } from "@fortawesome/free-solid-svg-icons";

function StartLearningPage() {

    const faqRef = useRef(null);
        const [isExpanded, setIsExpanded] = useState(false);
    
        const faqQuestions = [
            "How do I reset my password?",
            "Where can I check my order status?",
            "How do I contact customer support?",
            "What payment methods are accepted?",
            "Can I change my shipping address after ordering?",
            "How do I return a product?",
            "Is there a warranty on the products?",
            "How do I track my shipment?",
            "What are the delivery times?",
            "Are international orders supported?"
        ];
    
        const toggleFAQ = () => {
            const content = faqRef.current;
            if (!content) return;
    
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                setTimeout(() => {
                    content.style.maxHeight = "200px";
                }, 10);
            }
    
            setIsExpanded(!isExpanded);
        };

    return (
<div className="pt-[5vh] w-full h-auto flex flex-col items-center">
    <div className="w-[95%] xl:w-[85%] 2xl:w-[75%] h-auto mt-[30px] lg:mt-[50px] flex flex-col gap-[50px]">
        <div className="w-full flex flex-col md:flex-row gap-[20px] justify-around items-center p-[30px] min-h-[80vh] max-h-fit">
            <div className="w-full lg:mt-[50px] lg:w-3/5 h-auto flex flex-col gap-[20px] md:w-[65vw] md:mr-[50px]">
                <div className="w-full md:w-[70%] flex flex-col items-start justify-center mt-[20px]">
                    <h1 className="font-bold text-[32px] md:text-[40px] text-6xl mb-[20px]">We are here for all your questions</h1>
                </div>
                <p className="w-full md:w-[85%] text-[16px] md:text-[24px] mb-[20px] text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eius amet mollitia inventore repudiandae corporis saepe sed praesentium officia? Repellendus earum sint veritatis hic ipsa vitae, blanditiis voluptates atque tenetur?
                </p>
                <p className="w-full md:w-[85%] text-[12px] md:text-[18px] text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt voluptatum aliquam id quo perspiciatis modi necessitatibus facere consectetur beatae quia reprehenderit deleniti possimus aut esse consequatur, deserunt odit. Enim.
                </p>
                <input 
                    className="border border-black p-[10px] rounded-[100px] md:w-[85%] focus:outline-none focus:ring-2 focus:ring-[#0D5B58] focus:border-[#0D5B58] transition duration-300 ease-in-out" 
                    placeholder="Search.." 
                    type="text" 
                />
            </div>
            <div className="hidden md:block w-1/2 lg:w-2/5 h-auto flex items-center mt-[30px] md:w-[35vw] flex justify-center items-center">
                <img draggable="false" src={QuestionBubble} className="w-[400px] h-[300px] ml-auto" alt="Contact" />
            </div>
        </div>
    </div>
    <div className="w-full bg-[#1BB1AB] mt-[30px] flex flex-col items-center pb-10 min-h-[71vh] p-[30px]">
        <div className="w-[70%] pt-10">
            <h1 className="text-white font-bold text-[40px]">Common questions,</h1>
            <h2 className="text-white font-bold text-[36px]">by our users</h2>
        </div>
        <div 
            ref={faqRef}
            className="w-[70%] overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: "200px" }}
        >
            {faqQuestions.map((question, index) => (
                <div key={index} className="flex flex-row w-full items-center gap-[20px] mt-[30px]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-xl md:text-2xl" />
                    <p className="text-white text-[18px]">{question}</p>
                </div>
            ))}
        </div>
        <div className="relative flex flex-col justify-center items-center w-full mt-5 cursor-pointer" onClick={toggleFAQ}>
            <p className="text-white font-bold text-[18px]">
                {isExpanded ? "Show fewer questions" : "Click below for more questions"}
            </p>
            <FontAwesomeIcon 
                icon={faArrowDown} 
                className={`text-white text-2xl mt-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
            />
        </div>
    </div>
    <div className="min-h-[70vh] max-h-fit pt-[20px] flex flex-col items-center bg-white p-8">
        <h1 className="text-4xl font-bold text-center">Why choose Aithentic?</h1>
        <p className="text-center max-w-3xl mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="justify-center grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full max-w-6xl break-all md:pt-[20px]">
            {[
                { title: "Powerful Software", description: "Lorem ipsum dolor sit amet..." },
                { title: "Good Communication", description: "Lorem tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." }, 
                { title: "Ethically Responsible", description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6">
                    <h2 className="font-bold text-xl mt-4"><FontAwesomeIcon className='mr-[20px]' icon={faWrench} />{item.title}</h2>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
</div>
        
    )
    }
    
    export default StartLearningPage