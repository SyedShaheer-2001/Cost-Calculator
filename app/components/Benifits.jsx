import React from 'react';
import {
  BadgePercent,
  Timer,
  Wallet,
  BarChartHorizontal,
} from 'lucide-react';

const benefits = [
  {
    title: 'Clear Pricing Breakdown',
    description:
      'The most distinctive aspect of using our app pricing calculator is that it gives you a transparent cost estimation based on your specific app needs.',
    icon: <BarChartHorizontal size={48} className="text-white" />,
  },
  {
    title: 'Time-Saving',
    description:
      'Our cost calculator provides you with instant estimates, saving you time and allowing you to move forward quickly and effortlessly.',
    icon: <Timer size={48} className="text-white" />,
  },
  {
    title: 'Effective Cost Planning',
    description:
      'Our custom calculator lets businesses estimate costs upfront, helping them plan their budgets timely and successfully.',
    icon: <Wallet size={48} className="text-white" />,
  },
  {
    title: 'Comparative Analysis',
    description:
      'It helps you compare development costs across different app types and complexities with clarity and precision.',
    icon: <BadgePercent size={48} className="text-white" />,
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-10" style={{
        backgroundImage: "url('/myGallery/benifitBG.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-[820px] mx-auto text-white">
          <h2 className="text-heading font-semibold mb-6 leading-[100%] ">
            Benefits Of Using Our App Development Cost Calculator
          </h2>
          <p className="font-thin text-para">
            Our App Development Cost Calculator empowers you to get a fast, transparent, and accurate estimate for building a mobile app. Whether you're developing for iOS, Android, or both, this tool breaks down app development costs by platform, features, and design complexity. Perfect for startups, entrepreneurs, and businesses, it helps you plan budgets more effectively, avoid hidden costs, and make data-driven decisions. Use our app cost calculator to save time, reduce guesswork, and start your project with clarity and confidence.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-2 sm:px-0 max-w-[1100px] mx-auto text-white" >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/30 rounded-xl gradient-border  sm:py-[60px] sm:px-[60px] py-[20px] px-[40px] flex gap-4 items-center justify-center transition-all duration-300 flex-col text-center"
            >
              {/* Text */}
              
                <h4 className="text-xl sm:text-2xl lg:text-3xl  ">
                  {benefit.title}
                </h4>
                <p className=" text-para font-thin ">
                  {benefit.description}
                </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="mt-16 text-center">
          <button className="bgPinkGradient py-4 px-10 sm:px-12 rounded-full text-white font-semibold text-para hover:opacity-90 transition">
            FIND YOUR APP COST TODAY
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Benefits;
