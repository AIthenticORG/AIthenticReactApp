import React from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaCog, FaBolt, FaStar, FaShieldAlt } from "react-icons/fa";

const SubscriptionsSliderItems = ({ from, to }) => {
  const sliderItems = [
    { title: "Basis",
      description: "Het Basis-plan biedt toegang tot de meest essentiële tools om je ervaring op te starten. Perfect voor beginners die een solide basis willen leggen.",
      bgColor: "bg-green-200",
      textColor: "text-black",
      border: "border-4 border-green-500",
      icon: <FaRegCheckCircle size={40}/>},
    { title: "Basis +",
      description: "Met Basis + krijg je extra functionaliteit, premium toegang tot tools en meer persoonlijke ondersteuning. Ideaal voor gevorderde gebruikers.",
      bgColor: "bg-blue-200",
      textColor: "text-black",
      border: "border-4 border-blue-500",
      icon: <FaCog size={40}/>},
    { title: "Brons",
      description: "Het Brons-abonnement biedt een uitgebreide reeks functies en een snellere klantenservice, ideaal voor groeiende bedrijven die meer nodig hebben.",
      bgColor: "bg-orange-200",
      textColor: "text-black",
      border: "border-4 border-orange-500",
      icon: <FaBolt size={40}/>},
    { title: "Zilver",
      description: "Zilver biedt premium opties, plus prioritaire toegang tot support en extra tools om je werk sneller en efficiënter te maken.",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      border: "border-4 border-gray-500",
      icon: <FaStar size={40}/>},
    { title: "Goud",
      description: "Goud is onze meest uitgebreide optie, met exclusieve functies, toegang tot 24/7 ondersteuning en de ultieme gebruikerservaring.",
      bgColor: "bg-yellow-200",
      textColor: "text-black",
      border: "border-4 border-yellow-500",
      icon: <FaShieldAlt size={40}/>},
  ];

  return (
    <div className="flex overflow-x-hidden w-full h-auto">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          className="flex flex-shrink-0 gap-6 p-4">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`h-[400px] w-[300px] sm:h-[500px] sm:w-[350px] md:h-[500px] md:w-[400px] lg:h-[500px] lg:w-[400px] flex flex-col items-center justify-between font-bold hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-6 shadow-lg ${item.bgColor} ${item.textColor} ${item.border}`}>
              <div className="mb-4 text-center text-2xl text-gray-700">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">{item.title}</h2>
              <p className="text-sm sm:text-md md:text-lg text-center mb-4 text-gray-600">{item.description}</p>
              <button className="mt-auto bg-black text-white px-6 py-3 text-[14px] sm:text-[16px] md:text-[18px] rounded-full transform transition-all duration-300 hover:bg-gray-800 hover:scale-110 hover:shadow-xl">
                Bekijk plan
              </button>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default SubscriptionsSliderItems;
