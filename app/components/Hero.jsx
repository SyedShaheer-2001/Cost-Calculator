// components/Hero.jsx
import React from 'react';

const Hero = ({ onTypeSelect }) => {
    return (
        <section className="max-w-[1600px] mx-auto text-center py-8 sm:py-16 flex items-center justify-center ">
            <div className="   ">
                <h2 className="text-heading mb-12 mx-4 font-bold">
                    How much does it cost to make an App?
                </h2>

                <div className="flex justify-center lg:gap-[26px] lg:flex-row flex-col gap-[50px] px-4 items-center max-w-[1100px]">

                    {/* Existing Apps Option */}
                    <div className="bg-black text-white py-[35px] px-[26px] sm:py-[70px] sm:px-[76px] rounded-xl lg:max-w-[627px] w-full flex flex-col items-center justify-center sm:gap-14 gap-8">
                        <h3 className=" text-[30px] leading-[34px]">Like existing Apps</h3>
                        <p className=" text-subheading  font-semibold">Uber, Instagram, Airbnb, WhatsApp etc.</p>
                        <div
                            className="cursor-pointer rounded-full py-[12px] px-[30px] sm:py-[15px] sm:px-[40px] border-2 sm:border-3 border-white text-para ease-in-out hover:bg-gradient-to-br hover:from-[#7250D9] hover:to-[#E81D6C] hover:border-none sm:hover:py-[18px] hover:py-[14px]"
                            onClick={() => onTypeSelect('existing')}
                        >
                            GET A COST
                        </div>
                    </div>

                    {/* Business Apps Option */}
                    <div className="bgPinkGradient text-white py-[35px]  px-[26px] sm:py-[70px] sm:px-[76px] rounded-xl lg:max-w-[627px] w-full flex flex-col items-center justify-center gap-9">
                        <h3 className=" text-[30px] font-bold leading-[34px]">For my own business</h3>
                        <p className=" text-subheading  font-semibold">Cars & Transport, Social networking, Travel, Health & Beauty etc.</p>
                        <div
                            className="cursor-pointer rounded-full py-[12px] px-[30px] sm:py-[15px] sm:px-[40px] border-2 sm:border-3 border-white text-para hover:border-black hover:bg-black"
                            onClick={() => onTypeSelect('business')}
                        >
                            GET A COST
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
