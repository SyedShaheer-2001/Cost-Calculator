'use client';
import { useState } from 'react';

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

    return (
        <div className="relative w-full pt-[121px]">
            {/* Background split */}
            <div className="absolute inset-0 z-0">
                <div className="h-1/2 bg-white" />
                <div className="h-1/2 bg-[#1C1C1C]" />
            </div>

            {/* Blue Card */}
            <div className="relative z-10  mx-auto ">
                <div className="max-w-[1260px] mx-auto bg-gradient-to-r from-[#0055CC] to-[#0044A4] text-white rounded-[64px]  flex flex-col lg:flex-row shadow-2xl overflow-hidden">
                    {/* Left Side (Form) */}
                    <div className="lg:w-2/3 w-full pr-6 pl-[100px] pt-[45px] pb-[65px] py-10">
                        <h2 className="text-[58px] font-thin mb-[76px] leading-[64px]">
                            Start growing your <br /> business with us
                        </h2>
                        <form className="space-y-5 max-w-[620px]">
                            <div className="flex gap-8 flex-col md:flex-row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="pb-[19px] bg-transparent border-b border-[#80AAE5] w-full outline-none placeholder-[#80AAE5] text-white"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="pb-[19px] bg-transparent border-b border-[#80AAE5] w-full outline-none placeholder-[#80AAE5] text-white"
                                />
                            </div>

                            <div className="relative mt-16 ">
                                <input
                                    type="text"
                                    name="project"
                                    placeholder="About project"
                                    value={form.project}
                                    onChange={handleChange}
                                    className="pb-[10px] bg-transparent border-b border-[#80AAE5] w-full outline-none placeholder-[#80AAE5] text-white pr-6"
                                />
                                <span className="absolute right-0 top-0 text-[#80AAE5] text-lg">✎</span>
                            </div>

                            <label className="flex items-center space-x-2 text-white text-sm">
                                <input
                                    type="checkbox"
                                    name="sendNDA"
                                    checked={form.sendNDA}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span>Send me NDA</span>
                            </label>

                            <div className="flex justify-between items-center mt-[29px]">
                                <p className="text-sm leading-[24px] max-w-[360px] font-light">
                                    By sending this form I confirm that I have read and accept the{' '}
                                    <span className="underline cursor-pointer">Privacy Policy</span>
                                </p>
                                <button
                                    type="submit"
                                    className="bg-white text-[#0066FF] font-extralight font-[144px] px-[44px] py-[18px] rounded-full hover:bg-gray-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side (Testimonial) */}
                    <div className="lg:w-1/3 w-full lg:mt-0 flex flex-col justify-between bg-[#0044A4] pt-[100px] px-[44px] pb-[65px]">
                        <div >
                            <div className="flex items-center gap-4 ">
                                <img
                                src="/Home/user.svg"
                                alt="User"
                                className="w-[90px] h-[90px] rounded-[24px] font-extrathin object-cover"
                            />
                            <div>
                                <div className='flex gap-2'>
                                    <img src="/Home/flag.svg" alt="" />
                                    <p className="text-[18px] font-bold leading-[18px] ">USA</p>

                                </div>
                                <p className="text-[22px] font-thin leading-[30px]">Dan Jones</p>
                                <p className="text-[18px] leading-[28px]">CTO at NURSING</p>
                            </div>


                            </div>
                            
                            <div className='mt-[20px] '>
                            <p className="max-w-[290px] font-extralight text-[18px] leading-[28px]">
                                “The team is very organized, communicative, and proactive.
                                They keep the project on track and provide excellent suggestions
                                to improve the product.”
                            </p>
                        </div>  

                        </div>
                        


                        <div className="flex justify-center mt-4">
                            <div className="w-2 h-2 bg-white rounded-[3px] mx-1 opacity-70" />
                            <div className="w-2 h-2 bg-white rounded-[3px]  mx-1 opacity-40" />
                            <div className="w-2 h-2 bg-white rounded-[3px]  mx-1 opacity-40" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
