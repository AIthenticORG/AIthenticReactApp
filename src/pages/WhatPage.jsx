import React from 'react';
import searching from '../assets/searching.png';


const WhatPage = () => {
    return (
        <div className='w-full min-h-[100vh] top-[50px] lg:top-[80px] relative flex flex-col items-center'> 
            <div className="w-[90%] max-w-7xl flex flex-col gap-16 mt-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 h-auto flex flex-col gap-6">
                        <section>
                            <h1 className="text-3xl md:text-5xl font-bold">Wat?</h1>
                            <p className="text-sm md:text-lg leading-relaxed">
                                Op deze pagina vindt u een toelichting op onze werkzaamheden. Lees verder voor een uitgebreide uitleg.
                            </p>
                        </section>
                        <section>
                            <h2 className='text-2xl md:text-3xl font-bold mt-6'>
                                Waar gaat het eigenlijk over?
                            </h2>
                            <h3 className='text-1xl md:text-2xl font-medium mt-6'>
                                Er is veel ruis in de wereld van AI. 
                            </h3>
                            <p className='mt-2'> 
                                Momenteel staan de Large Language Model (LLMs) sterk in de belangstelling. AI wordt vaak geassocieerd met dit type. Maar er is veel meer. 
                            </p>
                            <p className='mt-5'>
                               Een aantal van deze AI-ontwikkelingen kunnen worden geclassificeerd en hebben allemaal al hun intrede gedaan in de gezondheidszorg.
                            </p>
                            <p className='mt-5 font-bold'>
                                Denk bijvoorbeeld aan de volgende functionaliteiten:
                            </p>
                            <ul className='list-disc list-inside mt-2 gap-5 flex flex-col'> 
                                <li>Reactieve Machines: Deze AI-systemen reageren op specifieke situaties zonder geheugen. Bijvoorbeeld: valdetectoren die reageren op een bepaalde gebeurtenis.</li>
                                <li>AI met Beperkt Geheugen: AI-systemen die gegevens uit het verleden kunnen gebruiken om beslissingen te nemen, maar het geheugen is tijdelijk. Bijvoorbeeld: Chirurgische robots die gegevens uit het verleden gebruiken om een operatie uit te voeren.</li>
                                <li>'Theory-of-Mind' AI: Een conceptuele AI die reageert op emoties, overtuigingen en intenties. Bijvoorbeeld: knuffeldieren die reageren op emoties en worden toegepast bij patiënten die lijden aan de ziekte van Alzheimer.</li>
                            </ul>
                        </section>
                    </div>
    
                    <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                            <img src={searching} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12 mb-15">
                   <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center p-5 rounded-lg">
                            <img src={searching} alt="Waarom" draggable="false" className="w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain select-none"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-auto flex flex-col gap-8">
                        <section className="flex flex-col gap-6">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Per toepassingsgebied zijn er ook gespecialiseerde soorten.
                            </h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed text-gray-700 list-disc list-inside">
                                <li className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-100 hover:scale-105'>
                                    <strong>Machine Learning (ML):</strong> AI-systemen die leren van gegevens om taken na verloop van tijd te verbeteren. 
                                    Dit omvat leren onder toezicht, leren zonder toezicht en reinforcement learning (RL).
                                </li>

                                <li className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-100 hover:scale-105'>  
                                    <strong>Natuurlijke Taalverwerking (NLP):</strong> Richt zich op het begrijpen van taal. NLP helpt zorgverleners door computers in staat te stellen menselijke taal te begrijpen en te verwerken.
                                </li>

                                <li className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-100 hover:scale-105'>
                                    <strong>Computer Vision:</strong> Binnen radiologie heeft deze techniek een hoge vlucht genomen. Algoritmes worden getraind om op basis van patronen in beelden afwijkingen te detecteren.
                                </li>

                                <li className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-100 hover:scale-105'>
                                    <strong>Robotica:</strong> AI en robotica werken samen om robots te ontwikkelen die taken uitvoeren, zoals operaties en thuiszorgondersteuning.
                                </li>

                                <li className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-100 hover:scale-105'>
                                    <strong>Expertsystemen:</strong> AI-systemen ontworpen om menselijke expertise in specifieke domeinen, zoals medische diagnoses, te evenaren.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatPage;