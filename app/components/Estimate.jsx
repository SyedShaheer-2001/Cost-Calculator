'use client'
import React, { useState } from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import EstimatePDF from './EstimatePDF';

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

function Estimate({ estimate , selectedData , category , selectedPlatform}) {

  const [name, setName] = useState("");
  const [phone, setPhone]= useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage]= useState("");

  console.log('xs category', category)
  console.log('xs estimate', estimate)
  console.log('xs selectedPlatform', selectedPlatform)
  console.log('selectedData xs', selectedData)


 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name.trim() || !email.trim()) {
    setMessage("Please enter name and email.");
    return;
  }

  try {
    // 1. Save form metadata (not PDF) to Firestore
    await addDoc(collection(db, "estimates"), {
      name,
      email,
      phone,
      category,
      estimate,
      selectedPlatform,
      selectedData,
      timestamp: new Date()
    });

    // 2. Generate PDF
    const blob = await pdf(
      <EstimatePDF
        name={name}
        email={email}
        category={category}
        selectedData={selectedData}
        estimate={estimate}
        selectedPlatform={selectedPlatform}
      />
    ).toBlob();

     // 3. Send to server via FormData
    const formData = new FormData();
    formData.append("pdf", blob, `${name}_estimate.pdf`);
    formData.append("name", name);
    formData.append("email", email);
    // formData.append("phone", phone);

    // https://appcostcalculator.ca/server/send-estimate
    // http://localhost:5000/send-estimate

    const response = await fetch("https://appcostcalculator.ca/server/send-estimate", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Email failed");
    // 4. Optional: download locally
    saveAs(blob, `${name}_estimate.pdf`);

    setMessage("Estimate submitted and emailed!");
  } catch (error) {
    console.error("Error:", error);
    setMessage("Something went wrong");
  }
};

console.log('selectedData', selectedData)


const nonDevHours = Math.floor(estimate / 2.7);
const summaryTime = estimate + nonDevHours;
const maxTime = Math.round(summaryTime * 1.25);
const minTime = Math.round(summaryTime * 0.80);

// Calculate how many days to add (1 day per 14 hours)
const daysToAdd = Math.floor(summaryTime / 14);

// Get today's date
const today = new Date();

// Add days to today
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + daysToAdd);

// Format the date
const formattedDate = futureDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});


  return (
    <div className=''>
      <div className="flex xl:flex-row flex-col overflow-hidden max-w-[1600px] mx-auto mx-4 pt-16">

        {/* Right container - 940px */}
        <div className=" rounded-[18px] sm:pt-[25px] sm:pb-[50px] py-[20px] px-[20px] sm:px-[40px]  w-full pr-[5px]">
          <p className='leading-[38px] sm:text-xl  md:text-2xl lg:text-3xl xl:text-4xl pb-[15px]  sm:pb-[40px] font-semibold'>Rough Estimate of My App</p>
          <div className='flex overflow-hidden max-w-[1300px] mx-auto text-white rounded-[18px] flex-col lg:flex-row'>
            {/* Left Light blue section */}
            <div className='lg:w-2/5 bg-black pt-[55px] px-[30px] pb-[55px] sm:pt-[60px] sm:px-[60px] sm:pb-[95px] flex flex-col justify-center items-center'>
              <p className='leading-[28px] text-[18px] sm:text-[22px]  text-center'>Summary time</p>
              <p className='leading-[62px] text-[40px] sm:text-[52px] text-center font-semibold' >{summaryTime} h</p>
              <div className='flex sm:flex-col justify-center items-center py-4 sm:py-[40px] text-[18px] leading-[30px] sm:gap-0 gap-4'>
                <div className='flex flex-row gap-[5px] sm:gap-[10px]'>
                  <p className='font-semibold text-sm sm:text-2xl'>Min</p>
                  <p className=' text-sm sm:text-2xl'>{minTime} h</p>
                </div>
                <div className='flex flex-row gap-[5px] sm:gap-[10px]'>
                  <p className='font-semibold text-sm sm:text-2xl'>Max</p>
                  <p className=' text-sm sm:text-2xl'>{maxTime} h</p>
                </div>
              </div>
              <div className='flex sm:flex-col text-center sm:gap-2 gap-4'>
                <p className='text-[10px] sm:text-[16px]'>Estimated release date</p>
                <p className='text-[10px] sm:text-[16px]'> {formattedDate}</p>
              </div>
            </div>

            {/* Right Pink section */}
            <div className='lg:w-3/5 bgPinkGradient  sm:block'>
              <div className="py-6 px-4 sm:p-8 rounded-3xl w-full max-w-[400px] 2xl:max-w-[700px] mx-auto text-center ">
                {/* Headings */}
                <h2 className="text-[22px]  leading-[28px] mb-1 hidden sm:block 2xl:text-[30px] 2xl:leading-[38px]">Download</h2>
                <h2 className="text-[22px]  leading-[28px] mb-1 hidden sm:block  2xl:text-[30px] 2xl:leading-[38px]">rough cost estimation</h2>
                <p className="text-[16px]   mb-8 leading-[28px] hidden sm:block 2xl:text-[25px] 2xl:leading-[38px]">with full features list</p>

                <p className="text-[12px]  mb-4 leading-[28px] sm:hidden">Download rough cost estimation with full features list</p>

                {/* Form */}
                <form className="space-y-6  ">
                  <div className='text-[#80AAE5] text-[12px] sm:text-[18px] sm:mb-8 mb-8 '>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent border-b  outline-none text-white placeholder-white pb-2"
                    />
                  </div>
                  <div className='text-[#80AAE5] text-[12px] sm:text-[18px] mb-8'>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Your business email"
                      className="w-full bg-transparent border-b  outline-none text-white placeholder-white pb-2"
                    />
                  </div>
                  <div className='text-[#80AAE5] text-[12px] sm:text-[18px] mb-8'>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="phone"
                      placeholder="Your phone number"
                      className="w-full bg-transparent border-b  outline-none text-white placeholder-white pb-2"
                    />
                  </div>
                  {message && (
                    <div className='text-[#120B09]'>{message}</div>
                  )}

                  {/* Button */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="hover:bg-black hover:border-black border-white border-2  text-[13px] sm:text-[18px] text-white cursor-pointer py-[12px] px-[18px] sm:py-[16px] sm:px-[25px] rounded-full transition"
                  >
                    Download PDF
                  </button>
                </form>

                {/* Link */}
                {/* <p className="text-sm text-white mt-4 font-normal  cursor-pointer hover:text-[#AFCBFF]">
                  Watch the example
                </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Left container - 320px */}
        {/* <div className="xl:w-1/4 xl:pl-[32px]  pl-0 flex  gap-[30px] xl:flex-col w-full ">
          
          <div className="shadow-2xl rounded-xl  px-4 pt-[35px] pb-[25px]  w-1/2 xl:w-auto text-center">
            <p className="text-[#202020] text-[12px] sm:text-[18px] mb-2  sm:px-4 px-0">
              Leave request to start a project in 2 days
            </p>
            <a
              className="inline-flex items-center text-[#0066FF] text-[12px] sm:text-[18px] font-thin  cursor-pointer"
            >
              Free quote <FiArrowRight className="ml-2" />
            </a>
          </div>

         
          <div className="shadow-2xl rounded-xl pt-[20px] pb-[12px] w-1/2 xl:w-auto">
            <p className="text-[#202020] leading-[30px] text-[18px]  text-center">Share this</p>
            <p className="text-[#202020] leading-[30px] text-[18px]  mb-[20px] text-center">page</p>
            <div className="flex justify-center space-x-6 text-gray-300 text-xl">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaXTwitter className="hover:text-black cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Estimate
