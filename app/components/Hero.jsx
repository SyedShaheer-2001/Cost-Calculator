// components/Hero.jsx
import React from 'react';

const Hero = ({ onTypeSelect }) => {
    return (
        <section className="text-center py-6 sm:py-20 flex items-center justify-center text-white sm:px-10 px-4"
        >
            <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-8">
                <h2 className="text-mainheading  sm:mb-12 mx-4 font-bold max-w-[661px] text-center leading-[95%]">
                    How much does it cost to make an App?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[88px] max-w-[1100px] mx-auto ">

                    {/* Existing Apps Option */}
                    <div className="text-white bg-black/50 gradient-border py-12 px-2 sm:px-[66px] sm:py-[62px] rounded-[12px] flex flex-col mx-auto w-[90%]  sm:w-full">
                        <h3 className="text-[25px] sm:text-[31px] leading-[100%] text-[#FBFBF8] mb-4 sm:mb-6">Like existing Apps</h3>
                        <p className="text-para font-light mb-6 flex-1">Uber, Instagram, Airbnb, WhatsApp etc.</p>
                        <div className='flex items-center justify-center'>
                            <div
                                className="gradient-button"
                                onClick={() => onTypeSelect('existing')}
                            >
                                GET A COST
                            </div>

                        </div>

                    </div>

                    {/* Business Apps Option */}
                    <div className="text-white py-12 px-2 sm:px-[66px] sm:py-[62px] rounded-[12px] flex flex-col h-full bg-black/50 gradient-border mx-auto w-[90%]  sm:w-full">
                        <h3 className="text-[25px] sm:text-[31px] leading-[100%] text-[#FBFBF8] mb-4 sm:mb-6">For my own business</h3>
                        <p className="text-para font-light mb-6 flex-1 leading-[120%] mx-2">Cars & Transport, Social networking, Travel, Health & Beauty etc.</p>
                        <div className='flex items-center justify-center'>
                            <div
                                className="gradient-button"
                                onClick={() => onTypeSelect('business')}
                            >
                                GET A COST
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
