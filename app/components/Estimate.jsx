'use client'
import React, { useState } from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import EstimatePDF from './EstimatePDF';
import { ArrowLeft } from 'lucide-react';

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ReactCountryFlag from 'react-country-flag';

function Estimate({ estimate, selectedData, category, selectedPlatform, onBack }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [sendNDA, setSendNDA] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) newErrors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address";

    if (!phone.trim()) newErrors.phone = "Please enter your phone number";
    else if (!/^\d{7,15}$/.test(phone))
      newErrors.phone = "Enter a valid phone number (7–15 digits)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!name.trim() || !email.trim()) {
      setMessage("Please enter name and email.");
      return;
    }

    try {
      // Save to Firestore
      await addDoc(collection(db, "estimates"), {
        name,
        email,
        phone,
        project,
        sendNDA,
        category,
        estimate,
        selectedPlatform,
        selectedData,
        timestamp: new Date()
      });

      // Generate PDF
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

      // Save PDF locally
      saveAs(blob, `${name}_estimate.pdf`);

      setMessage("Estimate submitted successfully! PDF downloaded.");

      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setProject("");
      setSendNDA(false);

    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong");
    }
  };

  // Calculate estimate details
  const nonDevHours = Math.floor(estimate / 2.7);
  const summaryTime = estimate + nonDevHours;
  const maxTime = Math.round(summaryTime * 1.25);
  const minTime = Math.round(summaryTime * 0.80);
  const daysToAdd = Math.floor(summaryTime / 6);
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);
  const formattedDate = futureDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  //  {/* Back Button */}
  <div className="absolute top-8 left-6">
    <button
      onClick={onBack}
      className="text-sm text-white hover:underline flex items-center gap-1"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  </div>


  return (
    <>
      <div className='max-w-[1340px] mx-auto flex md:flex-row flex-col gap-6 relative pb-[54px]'>
        <div className="absolute top-8 left-6">
          <button
            onClick={onBack}
            className="text-sm text-white hover:underline flex items-center gap-1"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        <div className="md:w-1/2 w-full  text-white rounded-[14px]  flex flex-col lg:flex-row  border border-white overflow-hidden" style={{
          backgroundImage: "url('/myGallery/FromBG.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          {/* Left Side - Form */}
          <div className="w-full flex flex-col max-w-[1050px] mx-auto py-10 px-4 sm:px-6">
            <h2 className="text-[25px] sm:text-[25px] md:text-[30px] lg:text-[35px]  mb-8 leading-tight pt-8">
              Download full report <br /> with features
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name + Email */}

              <div className=" flex-col gap-2  mb-4">
                {/* Name Field */}
                <div className='flex flex-col gap-2 w-full mb-4'>
                  <div className='flex gap-2 items-center'>
                  <p className='text-sm sm:text-[16px]'>Full Name</p> {errors.name && <p className="text-red-300 text-[11px]">({errors.name})</p>}
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pb-2 border-b border-[#FBFBF8]/30 outline-none placeholder-[#FBFBF8]/30 text-white bg-transparent  placeholder:text-[12px]  sm:placeholder:text-[15px]"
                  />
                  
                </div>

                {/* Email Field */}
                <div className='flex flex-col gap-2 w-full mb-4'>
                  <div className='flex gap-2 items-center'>
                  <p className='text-sm sm:text-[16px]'>Your email</p> {errors.email && <p className="text-red-300 text-[11px]">({errors.email})</p>}
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pb-2 bg-transparent border-b border-[#FBFBF8]/30 outline-none placeholder-[#FBFBF8]/30 text-white placeholder:text-[12px]  sm:placeholder:text-[15px]"
                  />
                  
                </div>

                {/* Phone Field */}
                <div className='flex flex-col gap-2 w-full mb-4'>
                  <div className='flex gap-2 items-center'>
                  <p className='text-sm sm:text-[16px]'>Phone Number</p> {errors.phone && <p className="text-red-300 text-[11px]">({errors.phone})</p>}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pb-2 border-b border-[#FBFBF8]/30 outline-none placeholder-[#FBFBF8]/30 text-white bg-transparent placeholder:text-[12px]  sm:placeholder:text-[15px]"
                  />
                </div>

              </div>



              {/* Policy + Button */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 ">
                <div className='text-[13px] font-thin'>For complete report of your app, download pdf</div>
                <button className="submit-btn ">
                  <span>Download PDF</span>

                  <span className="icon-circle">
                    <img
                      src="/myGallery/Vector.svg"
                      alt="arrow icon"
                      className="arrow-icon"
                    />
                  </span>
                </button>

              </div>
            </form>
          </div>

        </div>

        <div className="md:w-1/2 w-full bg-gradient-blue rounded-2xl p-8 shadow-xl">
          {/* Main Summary */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <p className="text-[14px] text-white/90 font-medium">TIME SUMMARY</p>
            </div>
            <p className="text-mainheading font-bold text-white mb-2">{summaryTime}<span className="text-white/60 text-subheading ml-1">hours</span></p>
            <p className="text-para text-white/70">Total estimated development time</p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 bg-white/5 rounded-xl p-5 text-center hover:bg-white/10 transition-colors">
              <p className="text-para text-white/70 mb-1">Minimum Time</p>
              <p className="text-heading font-bold text-white mb-2">{minTime}h</p>
              <div className="h-1 w-12 mx-auto bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-xl p-5 text-center hover:bg-white/10 transition-colors">
              <p className="text-para text-white/70 mb-1">Maximum Time</p>
              <p className="text-heading font-bold text-white mb-2">{maxTime}h</p>
              <div className="h-1 w-12 mx-auto bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Release Date */}
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-para text-white/70">Projected Completion</p>
              </div>
              <button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {formattedDate}
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Estimate