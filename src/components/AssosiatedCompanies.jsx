import { useState } from 'react';
import React from 'react';

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
        <div className='bg-blue-100 w-full h-full p-6'>
            {currentType === 'one' && (
                <div className='bg-white p-8 rounded-lg shadow-md flex flex-col items-center max-w-[1000px] max-h-[600px]'>
                    <h2 className='text-gray-600 text-lg'>Associated companies</h2>
                    <h1 className='text-2xl font-bold mt-2'>Our current selection</h1>
                    <div className='flex mt-6 w-full'>
                        <div className='w-1/2 flex justify-center'>
                            <img className='w-160 h-80 bg-gray-300 rounded-lg'/>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <p className='text-lg font-medium italic text-gray-700 ml-[10px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                            </p>
                            <div className='mt-6'>
                                <p className='font-bold ml-[10px]'>Joost Vossers</p>
                                <p className='text-gray-600 ml-[10px]'>Head ICT S.P.Z.</p>
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
                <div className='bg-white p-8 rounded-lg shadow-md flex flex-col items-center max-w-[1000px] max-h-[600px]'>
                    <h2 className='text-gray-600 text-lg'>Associated companies</h2>
                    <h1 className='text-2xl font-bold mt-2'>Our current selection</h1>
                    <div className='flex mt-6 w-full'>
                        <div className='w-1/2 flex justify-center'>
                            <img className='w-160 h-80 bg-gray-300 rounded-lg'/>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <p className='text-lg font-medium italic text-gray-700 ml-[10px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                            </p>
                            <div className='mt-6'>
                                <p className='font-bold ml-[10px]'>Bobby. Yerins</p>
                                <p className='text-gray-600 ml-[10px]'>Co Founder, Geography Stats</p>
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
                <div className='bg-white p-8 rounded-lg shadow-md flex flex-col items-center max-w-[1000px] max-h-[600px]'>
                    <h2 className='text-gray-600 text-lg'>Associated companies</h2>
                    <h1 className='text-2xl font-bold mt-2'>Our current selection</h1>
                    <div className='flex mt-6 w-full'>
                        <div className='w-1/2 flex justify-center'>
                            <img className='w-160 h-80 bg-gray-300 rounded-lg'/>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <p className='text-lg font-medium italic text-gray-700 ml-[10px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                            </p>
                            <div className='mt-6'>
                                <p className='font-bold ml-[10px]'>Kay Guelen</p>
                                <p className='text-gray-600 ml-[10px]'>Co Founder, Mc Donalds</p>
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
