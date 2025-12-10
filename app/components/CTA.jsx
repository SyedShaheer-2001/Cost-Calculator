'use client';
import { useState } from 'react';
import { db } from "@/lib/firebase"; // or wherever your firebase.js is
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export default function CTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    sendNDA: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        project: form.project,
        sendNDA: form.sendNDA,
        timestamp: serverTimestamp()
      });

      // Optional: Show success message, toast, etc.
      console.log("Form submitted:", form);

      // Reset form after submission
      setForm({
        name: "",
        email: "",
        project: "",
        sendNDA: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className=" relative z-10 xl:mx-auto md:py-36 py-16 px-10" style={{
      backgroundImage: "url('/myGallery/footerBG.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="max-w-[1100px] mx-auto  text-white rounded-[14px]  flex flex-col lg:flex-row  border border-white overflow-hidden" style={{
        backgroundImage: "url('/myGallery/FromBG.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        {/* Left Side - Form */}
        <div className="w-full flex flex-col max-w-[1050px] mx-auto py-10 px-6" >
          <h2 className="text-[25px] sm:text-[25px] md:text-[30px] lg:text-[35px]  mb-8 leading-tight">
            Start growing your <br /> business with us
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-28 mb-4">
              <div className='flex flex-col gap-4 w-full'>
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="pb-4  border-b border-[#FBFBF8]/30 outline-none placeholder-[#FBFBF8]/30  text-white"
                /></div>
              <div className='flex flex-col gap-4  w-full'>
                <p>Your email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  className="pb-4 bg-transparent border-b border-[#FBFBF8]/30   outline-none placeholder-[#FBFBF8]/30 text-white"
                />

              </div>

            </div>

            {/* About Project */}
            <div className="mt-12 ">
              <p className='mb-4'>About project</p>
              <input
                type="text"
                name="project"
                placeholder="Enter your message"
                value={form.project}
                onChange={handleChange}
                className="pb-4 bg-transparent border-b border-[#FBFBF8]/30 w-full  outline-none placeholder-[#FBFBF8]/30 text-white"
              />
            </div>

            {/* NDA */}
            <label className=" space-x-2 text-white mb-2">
              <input
                type="checkbox"
                name="sendNDA"
                checked={form.sendNDA}
                onChange={handleChange}
                className="form-checkbox text-black"
              />
              <span className="leading-7 text-[16px] font-thin">Send me NDA</span>
            </label>

            {/* Policy + Button */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 ">
              <p className="text-sm font-light max-w-[300px]">
                By sending this form I confirm that I have read and accept the privacy policy
              </p>
              <button className="submit-btn">
                <span>Submit</span>

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
      <div className='max-w-[1100px] mx-auto mt-24 '>
        <p className='text-white text-para font-thin'>
          2025 © App cost calculator. All rights reserved.
        </p>
      </div>
    </div>

  );
}
