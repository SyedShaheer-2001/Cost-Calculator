'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="bg-[#ffffff] py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-heading font-semibold text-black leading-tight mb-8">
            Frequently Asked <span className="text-[#E81D6C]">Questions</span>
          </h2>
          <p className="text-gray-600 text-subheading leading-relaxed">
            Everything you need to know about our App Cost Calculator.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-8 shadow-md hover:shadow-xl transition-all duration-100 ${
                    activeIndex === index ? 'border-2 border-[#174273] rounded-4xl' : 'border border-gray-200 rounded-2xl'
                  }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-subheading font-semibold text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-7 h-7 sm:w-8 sm:h-8 text-gray-600 transition-transform duration-100 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-100 ease-in-out ${
                  activeIndex === index ? 'max-h-96 mt-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-subheading leading-relaxed">
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
