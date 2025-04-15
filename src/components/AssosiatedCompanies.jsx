import { useState } from 'react';
import React from 'react';
import voorbeeld from '../assets/voorbeeld1.jpg';
import mac from '../assets/Naamloos-2.png';
import google from '../assets/Naamloos-3.png';
import cocacola from '../assets/Naamloos-4.png';
import xbox from '../assets/Naamloos-5.png';
import nike from '../assets/Naamloos-6.png';
import bora2 from '../assets/Naamloos-7.png';
import spz from '../assets/Naamloos-8.png';
import bora from '../assets/bora.jpeg';
import jayro from '../assets/jayro.png';
import jayropeters from '../assets/jayropeters.jpeg';

const AssociatedCompanies = () => {
    const types = ['one', 'two', 'three'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentType, setCurrentType] = useState(types[0]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % types.length;
            setCurrentType(types[newIndex]);
            return newIndex;
        });
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + types.length) % types.length;
            setCurrentType(types[newIndex]);
            return newIndex;
        });
    };

    return (
        <div className='w-full h-full p-6 flex items-center justify-center'>
            {currentType === 'one' && (
                <div className='bg-white p-8 rounded-lg  flex flex-col items-center max-w-[900px] h-auto'>
                <h2 className='text-gray-600 text-lg'>Associated companies</h2>
                <h1 className='text-2xl font-bold mt-2'>Our current selection</h1>
                <div className='flex flex-col sm:flex-row mt-6 w-full'>
                <div className='w-full sm:w-1/3 flex justify-center'>
                    <img src={bora} draggable="false" className='w-full h-full object-cover bg-gray-300 rounded-lg hidden sm:block md:block' />
                </div>
                <div className='w-full sm:w-1/2 flex flex-col justify-center'>
                    <p className='text-lg font-medium italic text-gray-700 ml-[40px]'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                    </p>
                    <div className='mt-15 w-auto flex items-center'>
                    <div>
                        <p className='font-bold ml-[40px]'>Bora Efe</p>
                        <p className='text-gray-600 ml-[40px]'>@Mr_Avernues op X</p>
                    </div>
                    <div className='mx-4' style={{ height: '50px', width: '1px', backgroundColor: 'black' }}></div>
                    <img className='h-[70px] xs:hidden' draggable="false" src={bora2} alt=""/>
                    </div>
                </div>
                </div>
                <div className='flex justify-between items-center w-full mt-6'>
                <div className='flex space-x-2'>
                    <span className='w-3 h-3 bg-gray-700 rounded-full'></span>
                    <span className='w-3 h-3 bg-teal-300 rounded-full'></span>
                    <span className='w-3 h-3 bg-teal-300 rounded-full'></span>
                </div>
                <div className='flex space-x-4'>
                    <button onClick={handlePrevious} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                    &#8592;
                    </button>
                    <button onClick={handleNext} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                    &#8594;
                    </button>
                </div>
                </div>
            </div>
            )}
            {currentType === 'two' && (
                <div className='bg-white p-8 rounded-lg flex flex-col items-center max-w-[900px] h-auto'>
                <h2 className='text-gray-600 text-lg'>Associated companies</h2>
                <h1 className='text-2xl font-bold mt-2'>Our current selection</h1>
                <div className='flex flex-col sm:flex-row mt-6 w-full'>
                <div className='w-full sm:w-1/3 flex justify-center'>
                    <img src={voorbeeld} draggable="false" className='w-full h-full object-cover bg-gray-300 rounded-lg hidden sm:block md:block' />
                </div>
                <div className='w-full sm:w-1/2 flex flex-col justify-center'>
                    <p className='text-lg font-medium italic text-gray-700 ml-[40px]'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                    </p>
                    <div className='mt-15 w-auto flex items-center'>
                    <div>
                        <p className='font-bold ml-[40px]'>Henry Peters</p>
                        <p className='text-gray-600 ml-[40px]'>Manager McDonald's Nijmegen</p>
                    </div>
                    <div className='mx-4' style={{ height: '50px', width: '1px', backgroundColor: 'black' }}></div>
                    <img className='h-[70px] hide-on-small' draggable="false" src={mac} alt="" />
                    </div>
                </div>
                </div>
                <div className='flex justify-between items-center w-full mt-6'>
                <div className='flex space-x-2'>
                    <span className='w-3 h-3 bg-teal-300 rounded-full'></span>                    
                    <span className='w-3 h-3 bg-gray-700 rounded-full'></span>
                    <span className='w-3 h-3 bg-teal-300 rounded-full'></span>
                </div>
                <div className='flex space-x-4'>
                    <button onClick={handlePrevious} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                    &#8592;
                    </button>
                    <button onClick={handleNext} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                    &#8594;
                    </button>
                </div>
                </div>
            </div>
            )}
            {currentType === 'three' && (
                <div className='bg-white p-8 rounded-lg flex flex-col items-center max-w-[900px] h-auto'>
                <h2 className='text-gray-600 text-lg'>Associated companies</h2>
                <h1 className='text-2xl font-bold mt-2'>Our current selection</h1>
                <div className='flex flex-col sm:flex-row mt-6 w-full'>
                <div className='w-full sm:w-1/3 flex justify-center'>
                    <img src={jayropeters} draggable="false" className='w-full h-full object-cover bg-gray-300 rounded-lg hidden sm:block md:block' />
                </div>
                <div className='w-full sm:w-1/2 flex flex-col justify-center'>
                    <p className='text-lg font-medium italic text-gray-700 ml-[40px]'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                    </p>
                    <div className='mt-15 w-auto flex items-center'>
                    <div>
                        <p className='font-bold ml-[40px]'>Jayro Peters</p>
                        <p className='text-gray-600 ml-[40px]'>Rijke vader</p>
                    </div>
                    <div className='mx-4' style={{ height: '50px', width: '1px', backgroundColor: 'black' }}></div>
                    <img className='h-[70px] hide-on-small' draggable="false" src={jayro} alt="" />
                    </div>
                </div>
                </div>
                <div className='flex justify-between items-center w-full mt-6'>
                <div className='flex space-x-2'>
                    <span className='w-3 h-3 bg-teal-300 rounded-full'></span>
                    <span className='w-3 h-3 bg-teal-300 rounded-full'></span>
                    <span className='w-3 h-3 bg-gray-700 rounded-full'></span>
                </div>
                <div className='flex space-x-4'>
                    <button onClick={handlePrevious} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                    &#8592;
                    </button>
                    <button onClick={handleNext} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                    &#8594;
                    </button>
                </div>
                </div>
            </div>

            )}
        </div>
    );
};

export default AssociatedCompanies;
