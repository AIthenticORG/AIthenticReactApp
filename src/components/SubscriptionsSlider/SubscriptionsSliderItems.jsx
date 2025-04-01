import React from "react";
import { motion } from "framer-motion";

const SubscriptionsSliderItems = ({ from, to }) => {
  const sliderItems = [
    { text: "Apple Inc.", bgColor: "bg-red-500", textColor: "text-white", border: "border-4 border-red-700"},
    { text: "Google LLC", bgColor: "bg-blue-500", textColor: "text-white", border: "border-4 border-blue-700"},
    { text: "Microsoft", bgColor: "bg-green-500", textColor: "text-white", border: "border-4 border-green-700"},
    { text: "Coca-Cola", bgColor: "bg-yellow-500", textColor: "text-black", border: "border-4 border-yellow-700"},
    { text: "Nike", bgColor: "bg-purple-500", textColor: "text-white", border: "border-4 border-purple-700"},
    { text: "Amazon", bgColor: "bg-orange-500", textColor: "text-black", border: "border-4 border-orange-700"},
    { text: "Tesla", bgColor: "bg-teal-500", textColor: "text-white", border: "border-4 border-teal-700"},
    { text: "Meta (Facebook)", bgColor: "bg-pink-500", textColor: "text-white", border: "border-4 border-pink-700"},
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
              className={`h-[300px] w-[200px] sm:h-[400px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[600px] lg:w-[400px] flex items-center justify-center text-xl font-bold hover:scale-105 transition-all duration-300 ease-in-out rounded-lg ${item.bgColor} ${item.textColor} ${item.border}`}>
              {item.text}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default SubscriptionsSliderItems;
