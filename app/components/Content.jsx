'use client';
import React from 'react';

const Content = () => {

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="bg-white pb-12 md:pb-20 pt-4 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
        {/* Left Column: Headline + CTA */}
        <div>
          <h2 className="text-heading font-extrabold text-black mb-10 leading-tight">
            App Development <br /> Cost Calculator
          </h2>
          <p className="text-gray-700 text-para leading-relaxed mb-6 max-w-2xl">
            Have a mobile app idea and want to know how much it will cost to build? Use our advanced app cost calculator to get an instant, customized estimate based on your specific requirements. Whether you're a startup or an established business, this tool helps you accurately estimate app development costs, plan your budget effectively, and move forward with confidence.
          </p>
          <p className="text-gray-700 text-para leading-relaxed mb-12 max-w-2xl">
            With just a few clicks, our mobile app development cost calculator considers key factors such as app complexity, functionality, user interface design, back-end infrastructure, third-party integrations, and platform selection (iOS, Android, or both) to give you a realistic budget estimate.
          </p>

          <button onClick={scrollToPricing} className="inline-block bgPinkGradient text-[15px] px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition cursor-pointer">
            Calculate Your App Cost
          </button>
        </div>

        {/* Right Column: Breakdown Info */}
              <div className="bg-[#f9f9f9] rounded-3xl shadow-2xl p-12 sm:p-16">
                  <h3 className="text-heading font-bold text-[#E81D6C] mb-6">
                      Get a Personalized Price Breakdown
                  </h3>
                  <p className="text-gray-700 text-para leading-relaxed mb-6">
                      Select your preferred app platform (iOS, Android, or both), choose core features, design preferences, and overall project complexity — and our app cost calculator will instantly estimate your mobile app development cost.
                  </p>
                  <p className="text-gray-700 text-para leading-relaxed mb-6">
                      Get a detailed cost breakdown across essential development phases including UI/UX design, backend/frontend development, QA testing, and app deployment — all personalized to your inputs.
                  </p>
                  <p className="text-gray-700 text-para leading-relaxed">
                      Whether you're planning a simple mobile app or a complex, feature-rich solution, our calculator helps you estimate app costs accurately and align your budget, timeline, and project scope before development begins.
                  </p>

              </div>
      </div>
    </section>
  );
};

export default Content;
