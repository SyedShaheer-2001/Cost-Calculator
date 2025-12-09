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
    <section className="py-16 px-10"  style={{
    backgroundImage: "url('/myGallery/dev.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-[200px] items-center ">
        {/* Left Column: Headline + CTA */}
        <div>
          <h2 className="text-heading font-extrabold text-black mb-10 leading-[100%]">
            App Development <br /> Cost Calculator
          </h2>
          <p className="text-gray-700 text-para leading-relaxed  max-w-2xl">
            Have a mobile app idea and want to know how much it will cost to build? Use our advanced app cost calculator to get an instant, customized estimate based on your specific requirements. Whether you're a startup or an established business, this tool helps you accurately estimate app development costs, plan your budget effectively, and move forward with confidence.
          </p>
          <p className="text-gray-700 text-para leading-relaxed mb-12 max-w-2xl">
            With just a few clicks, our mobile app development cost calculator considers key factors such as app complexity, functionality, user interface design, back-end infrastructure, third-party integrations, and platform selection (iOS, Android, or both) to give you a realistic budget estimate.
          </p>

          <button onClick={scrollToPricing} className="gradient-button">
            Calculate Your App Cost
          </button>
        </div>

        {/* Right Column: Breakdown Info */}
              <div className='hidden lg:block'>
                <img src="/myGallery/upcalculator.png" alt="" />
              </div>
      </div>
    </section>
  );
};

export default Content;
