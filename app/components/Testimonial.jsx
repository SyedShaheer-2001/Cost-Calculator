import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Founder, HealthTech Co.',
    quote:
      "This tool gave me a clear idea of what features to prioritize in my MVP. Saved me weeks of planning!",
  },
  {
    name: 'David Kim',
    role: 'Product Manager, FinServe',
    quote:
      "Simple, elegant, and powerful. I could estimate app features with confidence before talking to devs.",
  },
  {
    name: 'Maya Patel',
    role: 'Startup Advisor',
    quote:
      "A must-use for anyone building an app. The step-by-step interface makes everything super clear.",
  },
];

const Testimonial = () => {
  return (
    <section className="relative text-white w-full pt-12 pb-6 px-8 bg-black overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-[#7250D9]/30 to-[#E81D6C]/30 mix-blend-screen pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto text-center bg-black py-20 px-6 rounded-[18px]">
        <h2 className="text-heading font-bold mb-12">
          What Our Users Are Saying
        </h2>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bgPinkGradient rounded-xl p-8 flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-2 duration-300"
            >
              <p className="text-subheading italic mb-6">“{testimonial.quote}”</p>
              <div className="mt-auto">
                <h4 className="font-semibold text-subheading">{testimonial.name}</h4>
                <p className="text-subheading italic">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
