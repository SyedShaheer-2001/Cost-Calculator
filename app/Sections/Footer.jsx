'use client'
import React from 'react'
import { FaArrowUp } from "react-icons/fa";


function Footer() {
    return (
        <div className='bgBlue'>
            <div className='max-w-[1600px] mx-auto px-4'>
                {/* <div className='pt-4 sm:pt-[150px]  text-white  flex items-baseline justify-between flex-col lg:flex-row gap-4'>
                    <div className='flex flex-col gap-4 items-baseline pb-[28px] w-[323px]'>
                        <p className='text-[18px]'>Services</p>
                        <button className='text-[#ABABAB] font-[500px]'>iOS App Development</button>
                        <button className='text-[#ABABAB] text-[16px]'>Android App Development</button>
                        <button className='text-[#ABABAB] text-[16px]'>Flutter App Development</button>
                        <button className='text-[#ABABAB] text-[16px]'>Web Development</button>
                        <button className='text-[#ABABAB] text-[16px]'>UI/UX Design</button>
                        <button className='text-[#ABABAB] text-[16px]'>Quality Assurance</button>
                        <button className='text-[#ABABAB] text-[16px]'>DevOps Services</button>
                    </div>
                    <div className='flex flex-col gap-4 items-baseline pb-[28px] w-[216px]'>
                        <p>Industries</p>
                        <button className='text-[#ABABAB] font-[500px]'>Healthcare</button>
                        <button className='text-[#ABABAB] text-[16px]'>Logistics</button>
                        <button className='text-[#ABABAB] text-[16px]'>FinTech</button>
                        <button className='text-[#ABABAB] text-[16px]'>Marketplace</button>
                        <button className='text-[#ABABAB] text-[16px]'>Retail</button>
                        <button className='text-[#ABABAB] text-[16px]'>Travel</button>
                        <button className='text-[#ABABAB] text-[16px]'>Education</button>
                    </div>
                    <div className='flex flex-col gap-4 items-baseline pb-[28px] w-[323px]'>
                        <p>Insights</p>
                        <button className='text-[#ABABAB] font-[500px]'>Cost to develop an app</button>
                        <button className='text-[#ABABAB] text-[16px]'>How to build ridesharing</button>
                        <button className='text-[#ABABAB] text-[16px]'>How to build a fitness app</button>
                        <button className='text-[#ABABAB] text-[16px]'>Build a streaming app</button>
                        <button className='text-[#ABABAB] text-[16px]'>CRM for Agriculture</button>
                        <button className='text-[#ABABAB] text-[16px]'>How to build a CRM</button>
                        <button className='text-[#ABABAB] text-[16px]'>Web design process</button>
                    </div>



                    <div className="flex flex-col items-baseline pb-[28px] w-[431px] xl:pl-0 ">
                        
                        <p className='mb-[20px]'>Offices</p>

                        <div className="grid sm:grid-cols-2 gap-16 mb-10 text-[#ABABAB]">
                            <div className='flex flex-col gap-16 lg:gap-8 text-[16px]'>
                                <div>
                                    <p className="">+380 73 575 67 51</p>
                                    <p className="">Estonia, Tallinn</p>
                                </div>

                                <div>
                                    <p className="">+1 415 231 3721</p>
                                    <p className="">USA, Claymont, DE</p>
                                </div>
                            </div>

                            <div>
                                <p className="">+47 80 02 50 37</p>
                                <p className="">Norway, Oslo</p>

                            </div>
                        </div>

                        Emails
                        <h2 className="text-[18px] font-normal mb-[20px]">Emails</h2>
                    <div className="grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-12">
                        <div>
                            <p className="font-medium">Build your team:</p>
                            <p className="text-[#ABABAB]">info@chameleon-ideas.com</p>
                        </div>
                        <div>
                            <p className="font-medium">We are hiring:</p>
                            <p className="text-[#ABABAB]">hr@chameleon-ideas.com</p>
                        </div>
                    </div>
                    </div>

                </div> */}
                <div className=' text-white pt-[66px] pb-[20px]'>
                    <div className='flex lg:justify-between flex-col lg:flex-row'>
                        {/* <div className='flex  gap-2 text-[16px] flex-col sm:flex-row'>
                            <p className='text-[#ABABAB]'>Chameleon-Ideas</p>
                            <p>Mobile App Development Cost Calculator</p>
                        </div> */}
                        {/* <div className='flex gap-8 text-[18px] lg:flex-row flex-col items-start pl-8 lg:pl-0 lg:pt-0 pt-8  lg:pr-2'>
                        <button> <a href="https://es.linkedin.com/company/chameleonideas">Linkedin</a></button>
                        
                        <button><a href="https://www.facebook.com/chameleonideas/">Facebook</a></button>
                        
                        <button> <a href="https://dribbble.com/tags/chameleon">Dribble</a></button>
                    </div> */}

                    </div>


                    <div className=" flex lg:justify-between flex-col lg:flex-row  items-start pt-[60px] pb-[37px]">

                        <div className='mb-8 sm:mb-0'>
                            <p className='text-[#ABABAB] leading-[16px] text-[16px] '>2025 © App cost calculator. All rights reserved.</p>

                        </div>

                        {/* <div className='flex gap-8 justify-center lg:items-center text-[16px] text-[#ABABAB] flex-col lg:flex-row items-start pt-8 lg:pt-0 lg:pl-0'>
                            <p className='leading-[16px] text-[16px] cursor-pointer'> <a href="https://chameleon-ideas.com/privacy-policy/">Privacy Policy</a></p>
                            <p className='leading-[16px] text-[16px] cursor-pointer'> <a href="https://chameleon-ideas.com/privacy-policy/">Cookies Policy</a> </p>
                            <p className='leading-[16px] text-[16px] cursor-pointer'> <a href="https://chameleon-ideas.com/terms-conditions/">Terms and Conditions</a></p>
                            <div className=' '>
                                <img src="/Footer/DMCA.svg" alt="" />
                            </div>

                        </div> */}

                    </div>

                    {/* Scroll to Top Button */}
                    {/* <div className="fixed bottom-0 left-0 z-100 cursor-pointer ">
                    <button
                        onClick={() => {console.log('scroll')}}
                        className="cursor-pointer"
                    >
                        <img src="/Footer/scrollTop.png" alt="" className="w-[64px] h-[64px]" />
                    </button>   
                </div> */}


                    {/* Floating Chat Button */}
                    {/* <div className="fixed bottom-2 right-2 z-100">
                    <img src="/Footer/message.png" alt="" className='w-[56px] h-[56px]' />
                </div> */}

                </div>

            </div>

        </div>
    )
}

export default Footer
