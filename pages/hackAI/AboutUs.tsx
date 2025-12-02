import React from 'react';

export default function AboutSection() {
  return (
    <section 
      // UPDATED GRADIENT: Changed via-60% to via-70% to push the darkening effect further down.
      className="w-full bg-[#283039] py-16 px-8"
    >
      <div 
        // UPDATED SPACING: Added 'lg:gap-24' to increase space between text and image on large screens.
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
      >
        
        {/* Text Content */}
        <div className="text-white text-center lg:text-left lg:w-1/2">
          <h2 className="text-5xl sm:text-6xl font-serif mb-8">
            ABOUT
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed font-serif">
            A 24-hour hackathon in which students can come together as a community of AI enthusiasts, network with industry professionals, utilize modern AI tools to create powerful and impressive projects to showcase. HackAI comes with food, swag, prizes and fun!
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-2xl lg:w-1/2">
          <div className="bg-white shadow-2xl rounded-lg">
            <img
              src="/hackai/hackOfficers.jpeg"
              alt="Hackathon presentation"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}