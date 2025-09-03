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
    <div className="relative w-full pt-2">
      {/* Background split */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bgBlue" />
      </div>

      {/* Blue Card */}
      <div className="px-4 relative z-10 mx-4 xl:mx-auto">
        <div className="max-w-[1300px] mx-auto bgPinkGradient text-white rounded-[14px] md:rounded-[54px] sm:rounded-[34px] flex flex-col lg:flex-row shadow-2xl overflow-hidden">
          {/* Left Side - Form */}
          <div className="lg:w-7/12 w-full pr-6 lg:pl-24 pl-6 pt-12 pb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[58px] font-light mb-8 leading-tight">
              Start growing your <br /> business with us
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="pb-4 bg-transparent border-b border-[#80AAE5] w-full outline-none placeholder-[#80AAE5] text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="pb-4 bg-transparent border-b border-[#80AAE5] w-full outline-none placeholder-[#80AAE5] text-white"
                />
              </div>

              {/* About Project */}
              <div className="relative mt-6">
                <input
                  type="text"
                  name="project"
                  placeholder="About project"
                  value={form.project}
                  onChange={handleChange}
                  className="pb-3 bg-transparent border-b border-[#80AAE5] w-full outline-none placeholder-[#80AAE5] text-white pr-6"
                />
                <span className="absolute right-0 top-0 text-[#80AAE5] text-lg">✎</span>
              </div>

              {/* NDA */}
              <label className="flex items-center space-x-2 text-white mt-2">
                <input
                  type="checkbox"
                  name="sendNDA"
                  checked={form.sendNDA}
                  onChange={handleChange}
                  className="form-checkbox bg-black"
                />
                <span className="leading-7 text-[16px] font-thin">Send me NDA</span>
              </label>

              {/* Policy + Button */}
              <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-6 mt-6">
                <p className="text-sm font-light max-w-sm">
                  By sending this form I confirm that I have read and accept the{" "}
                  <span className="underline cursor-pointer" > <a href="https://chameleon-ideas.com/privacy-policy/">Privacy Policy</a></span>
                </p>
                <button
                  type="submit"
                  className="hover:bg-black hover:border-black border-white border-2 text-sm sm:text-base px-8 py-4 rounded-full transition cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Testimonial */}
          <div className="lg:w-5/12 w-full flex flex-col justify-between bgOrange pt-16 px-6 sm:px-10 pb-12">
            <div>
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/Home/user.svg"
                  alt="User"
                  className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-[24px] object-cover"
                />
                <div>
                  <div className="flex gap-2 items-center">
                    <img src="/Home/flag.svg" alt="Flag" className="w-5 h-5" />
                    <p className="text-[16px] sm:text-[18px] font-bold leading-tight">USA</p>
                  </div>
                  <p className="text-[18px] sm:text-[22px] font-thin leading-tight">Dan Jones</p>
                  <p className="text-[16px] sm:text-[18px] leading-snug">CTO at NURSING</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[18px] sm:text-[22px] leading-[28px] font-extralight text-center sm:text-left">
                "The team is very organized, communicative, and proactive. They keep the project on track and provide excellent suggestions to improve the product."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
