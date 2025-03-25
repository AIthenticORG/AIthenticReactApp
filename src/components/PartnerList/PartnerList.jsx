import React from 'react';
import PartnerListItems from './PartnerListItems';

const PartnerList = () => {
    const partners = [
            "PrivacyZorg", "Google", "Jayro", "CocaCola", "Xbox", "Nike", "Bora2", "SPZ",
            "PrivacyZorg", "Google", "Jayro", "CocaCola", "Xbox", "Nike", "Bora2", "SPZ",
        ];


    return (
        <div className="w-full h-[200px] 2xl:h-[250px] flex flex-col bg-[#1BB1AB] justify-evenly items-center">
            <h1 className="text-white text-[25px] px-[15px] font-bold text-center">
                Below are all the companies we collaborate with.
            </h1>
            <PartnerListItems partners={partners} from={0} to={"-100%"}/>
        </div>
    );
}
export default PartnerList;