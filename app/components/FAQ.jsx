'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How accurate is the app development cost estimate?",
    answer:
      "Our calculator offers a close estimation based on the data you provide. While it doesn't replace a formal quote from a developer, it gives you a highly reliable starting point.",
  },
  {
    question: "Can I use this calculator for both iOS and Android?",
    answer:
      "Yes! The calculator allows you to estimate costs for iOS, Android, or cross-platform apps. You can select the platform during the calculation process.",
  },
  {
    question: "Do I need technical knowledge to use the calculator?",
    answer:
      "Not at all. The tool is designed to be user-friendly and doesn't require any coding or tech expertise. Just answer simple multiple-choice questions.",
  },
  {
    question: "Is this calculator free to use?",
    answer:
      "Absolutely. Our app development cost calculator is 100% free to use, with no hidden fees or sign-ups required.",
  },
  {
    question: "Can I share or export the estimate?",
    answer:
      "Yes. Once you complete the questionnaire, you’ll have the option to share or export your app cost estimate as a PDF or via email.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  console.log('setActiveIndex', activeIndex)

  return (
    <section className="bg-[#171717] text-white md:py-24 py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-heading font-semibold  leading-tight mb-8">
            Frequently Asked Questions
          </h2>
          <p className=" text-para font-thin">
            Everything you need to know about our App Cost Calculator.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 shadow-md hover:shadow-xl bg-[#222222] rounded-lg  ${
                    activeIndex === index ? ' transition-all duration-100 border-2 border-white' : ''
                  }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-subheading font-semibold ">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-100" />
                ) : (
                  <Plus className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-100" />
                )}
              </button>


              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 mt-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className=" text-para font-thin">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
