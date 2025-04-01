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
        <div className='pt-[10vh]'>
            <div className='flex flex-col md:flex-row p-[50px] min-h-[90vh] max-h-fit'>
                <div className='md:w-[60vw] md:mr-[100px]'>
                    <h1 className='text-6xl mb-[30px]'>
                    We are here for all your questions
                    </h1>
                    <h2 className='mb-[20px] text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eius amet mollitia inventore repudiandae corporis saepe sed praesentium officia? Repellendus earum sint veritatis hic ipsa vitae, blanditiis voluptates atque tenetur?
                    </h2>
                    <h2 className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt voluptatum aliquam id quo perspiciatis modi necessitatibus facere consectetur beatae quia reprehenderit deleniti possimus aut esse consequatur, deserunt odit. Enim.
                    </h2>
                </div>
                <div className='flex justify-center items-center md:w-[40vw] hidden md:flex'>
                    <img className='' draggable="false" src={QuestionBubble} alt="" />
                </div>
                
            </div>
            <div className='min-h-[71vh] p-[50px] bg-[#1BB1AB]'>
                <div className="w-full bg-[#1BB1AB] flex flex-col items-center pb-10">
                <div className="w-[90%] pt-10">
                    <h1 className="text-white font-bold text-[40px]">Common questions,</h1>
                    <h2 className="text-white font-bold text-[36px]">by our users</h2>
                </div>
                <div 
                    ref={faqRef}
                    className="w-[90%] min-h-[53vh] overflow-hidden transition-all duration-600 ease-in-out"
                    style={{ maxHeight: "53vh" }}
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
            </div>
            <div className='min-h-[70vh] max-h-fit pt-[40px]'>
                <div className=" flex flex-col  items-center bg-white p-8">
                    <h1 className="text-4xl font-bold text-center">Why choose Aithentic?</h1>
                    <p className="text-center max-w-3xl mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                <div className="justify-center grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full max-w-6xl break-all md:pt-[20px]">
                    {[
                    { title: "Powerful Software", description: "Lorem ipsum dolor sit amet..." },
                    { title: "Good Communication", description: "reeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaalllllllllllllllyyyyyyyyyyLLLLLLLLLLoooooooooonnnnnnnnnnnngggggggggWWWWWWWWoooooooooorrrrrrrrrddddddd" }, 
                    { title: "Ethically Responsible", description: "reeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaalllllllllllllllyyyyyyyyyyLLLLLLLLLLoooooooooonnnnnnnnnnnngggggggggWWWWWWWWoooooooooorrrrrrrrrddddddd" },
                    ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6">
                        <h2 className="font-bold text-xl mt-4"><FontAwesomeIcon className='mr-[20px]' icon={faWrench} />{item.title}</h2>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
        
    )
    }
    
    export default StartLearningPage