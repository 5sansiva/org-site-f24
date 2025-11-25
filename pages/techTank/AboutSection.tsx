import * as React from 'react';
import Image from 'next/image';
function AboutSection() {
  return (
    // Main container for the section with a light background and padding
    <section className="bg-stone-100 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Flex container for the two-column layout */}
        {/* It stacks vertically on mobile (flex-col) and is side-by-side on larger screens (md:flex-row) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* ## Left Column (Logo) ## */}
          <div className="flex-shrink-0 md:w-1/3 text-center">
              <Image src="/techTank2025/clearGreenLogo.png" width={300} height={300} alt="Tech Tank 2025 Logo" />
            
            {/* <div className="w-48 h-48 bg-gray-300 mx-auto flex items-center justify-center text-gray-500">
              Logo Placeholder
            </div> */}
          </div>

          {/* ## Right Column (Text Content) ## */}
          <div className="md:w-2/3">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center md:text-left">
              Tech Tank is a student-run conference organized by Artificial Intelligence Society at the
              University of Texas at Dallas. It is designed to empower students with the knowledge
              needed to take on the world of artificial intelligence! We want to connect you with industry
              professionals who understand the challenges and applications of AI in the industry. Come
              listen to our speakers share their experiences in these topics! Seats are limited, so please
              register ASAP!
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default AboutSection;