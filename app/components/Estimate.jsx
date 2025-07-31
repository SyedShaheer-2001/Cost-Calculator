import React from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

function Estimate({ estimate }) {
  return (
    <div className='container'>
      <div className="flex xl:flex-row flex-col overflow-hidden max-w-[1260px] xl:mx-auto mx-4 pt-16 gap-8 xl:gap-0">

        {/* Right container - 940px */}
        <div className="xl:w-3/4 bgGray rounded-[18px] sm:pt-[40px] sm:pb-[50px] py-[20px] px-[20px] sm:px-[40px] lg:px-[104px] w-full">
          <p className='leading-[38px] text-[20px] sm:text-[28px] pb-[15px]  sm:pb-[40px]'>Rough Estimate of My App</p>
          <div className='flex overflow-hidden max-w-[730px] mx-auto text-white rounded-[18px] flex-col lg:flex-row'>
            {/* Left Light blue section */}
            <div className='lg:w-2/5 bg-[#174273] pt-[25px] px-[30px] pb-[25px] sm:pt-[60px] sm:px-[60px] sm:pb-[95px] flex flex-col justify-center items-center'>
              <p className='leading-[28px] text-[18px] sm:text-[22px]  text-center'>Summary time</p>
              <p className='leading-[62px] text-[40px] sm:text-[52px] text-center' style={{ letterSpacing: '-1px', fontWeight: 200 }} >{estimate} h</p>
              <div className='flex flex-col justify-center items-center py-[40px] text-[18px] leading-[30px]'>
                <div className='flex flex-row gap-[10px]'>
                  <p className='font-normal'>Min</p>
                  <p className='font-thin'>595.4 h</p>
                </div>
                <div className='flex flex-row gap-[10px]'>
                  <p className='font-normal'>Max</p>
                  <p className='font-thin'>872 h</p>
                </div>
              </div>
              <div className='flex flex-col text-center'>
                <p className='text-[14px] leading-[24px] font-normal'>Estimated release date</p>
                <p className='text-[14px] font-thin'>August 2, 2025</p>
              </div>
            </div>

            {/* Right Pink section */}
            <div className='lg:w-3/5 bgPink hidden sm:block'>
              <div className="p-8 rounded-3xl w-full max-w-[400px] mx-auto text-center ">
                {/* Headings */}
                <h2 className="text-[22px]  leading-[28px] mb-1">Download</h2>
                <h2 className="text-[22px]  leading-[28px] mb-1">rough cost estimation</h2>
                <p className="text-[16px]   mb-8 leading-[28px]">with full features list</p>

                {/* Form */}
                <form className="space-y-6 ">
                  <div className='text-[#80AAE5] text-[18px] mb-10 '>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent border-b  outline-none text-white placeholder-white pb-2"
                    />
                  </div>
                  <div className='text-[#80AAE5] text-[18px] '>
                    <input
                      type="email"
                      placeholder="Your business email"
                      className="w-full bg-transparent border-b  outline-none text-white placeholder-white pb-2"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className=" bg-white text-[#0066FF] font-thin cursor-pointer py-[20px] px-[30px] rounded-full hover:bg-gray-100 transition"
                  >
                    Download PDF
                  </button>
                </form>

                {/* Link */}
                <p className="text-sm text-white mt-4 font-normal  cursor-pointer hover:text-[#AFCBFF]">
                  Watch the example
                </p>
              </div>




            </div>

          </div>
        </div>

        {/* Left container - 320px */}
        <div className="xl:w-1/4 xl:pl-[32px]  pl-0 flex  gap-[30px] xl:flex-col w-full ">
          {/* Free Quote Card */}
          <div className="bgGray rounded-xl  px-4 pt-[35px] pb-[25px]  w-1/2 xl:w-auto text-center">
            <p className="text-[#202020] text-[12px] sm:text-[18px] mb-2  sm:px-4 px-0">
              Leave request to start a project in 2 days
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#0066FF] text-[12px] sm:text-[18px]  hover:underline"
            >
              Free quote <FiArrowRight className="ml-2" />
            </a>
          </div>

          {/* Share Card */}
          <div className="bgGray rounded-xl pt-[20px] pb-[12px] w-1/2 xl:w-auto">
            <p className="text-[#202020] leading-[30px] text-[18px]  text-center">Share this</p>
            <p className="text-[#202020] leading-[30px] text-[18px]  mb-[20px] text-center">page</p>
            <div className="flex justify-center space-x-6 text-gray-300 text-xl">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaXTwitter className="hover:text-black cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>




        </div>


      </div>

    </div>
  )
}

export default Estimate
