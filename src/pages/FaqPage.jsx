import { useRef, useState } from "react";
import contact from '../assets/Contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const FaqPage = () => {
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
        <div className="w-full h-auto flex flex-col items-center">
            <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto mt-[50px] lg:mt-[80px] flex flex-col gap-[90px]">
                <div className="w-full flex flex-col md:flex-row gap-[20px] justify-around items-center">
                    <div className="w-full lg:mt-[100px] lg:w-3/5 h-auto flex flex-col gap-[20px]">
                        <div className="w-full md:w-[70%] flex flex-col items-start justify-center mt-[30px]">
                            <h1 className="font-bold text-[32px] md:text-[40px]">Frequently asked questions</h1>
                        </div>
                        <p className="w-full md:w-[85%] text-[16px] md:text-[24px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iure possimus fuga tenetur sed rerum nesciunt odio quidem, assumenda dolorem deserunt optio quasi laboriosam asperiores harum, perspiciatis voluptate. Error, esse.
                        </p>
                        <p className="w-full md:w-[85%] text-[12px] md:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium doloribus hic saepe cumque dicta quidem, facilis maiores repellendus aliquid corrupti dolor pariatur, aspernatur dolore rerum ea vero cupiditate explicabo?
                        </p>
                        <input 
                            className="border border-black p-[10px] rounded-[100px] md:w-[85%] focus:outline-none focus:ring-2 focus:ring-[#0D5B58] focus:border-[#0D5B58] transition duration-300 ease-in-out" 
                            placeholder="Search.." 
                            type="text" 
                        />
                    </div>
                    <div className="hidden md:block w-1/2 lg:w-2/5 h-auto flex items-center mt-[60px]">
                        <img draggable="false" src={contact} className="select-none w-[400px] h-[300px] ml-auto" alt="Contact" />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#1BB1AB] mt-[50px] flex flex-col items-center pb-10">
                <div className="w-[60%] pt-10">
                    <h1 className="text-white font-bold text-[40px]">Common questions,</h1>
                    <h2 className="text-white font-bold text-[36px]">by our users</h2>
                </div>
                <div 
                    ref={faqRef}
                    className="w-[60%] overflow-hidden transition-all duration-500 ease-in-out"
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
        </div>
    );
}

export default FaqPage;
