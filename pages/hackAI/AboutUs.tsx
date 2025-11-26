import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-700 to-gray-600 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-col gap-12 items-center">
        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-5xl sm:text-6xl font-serif mb-8 text-center lg:text-left">
            ABOUT
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed font-serif">
            A 24-hour hackathon in which students can come together as a community of AI enthusiasts, network with industry professionals, utilize modern AI tools to create powerful and impressive projects to showcase. HackAI comes with food, swag, prizes and fun!
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="bg-white p-4 shadow-2xl rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
              alt="Hackathon presentation"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}