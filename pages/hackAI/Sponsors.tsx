import React from 'react';
import Marquee from 'react-fast-marquee';

const sponsors = [
  { name: "Center for AI & ML", logo: "/hackai/sponsors/aiml.png" },
  { name: "AWS", logo: "/hackai/sponsors/aws.jpeg" },
  { name: "Cognizant", logo: "/hackai/sponsors/cognizant.png" },
  { name: "LTIMindtree", logo: "/hackai/sponsors/ltimindtree.webp" },
  { name: "Toyota", logo: "/hackai/sponsors/toyota.png" },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-[#364153] py-16">
      <div className="container mx-auto px-4">
        
        <h2 className="text-center text-white text-4xl md:text-5xl font-serif mb-12 tracking-wide">
          Past Sponsors
        </h2>

        <div className="w-full relative">
          
          <Marquee 
            speed={50} 
            gradient={true} 
            gradientColor="#364153" 
            autoFill={true} 
            pauseOnHover={true} // Handles Mouse Hover (Desktop) and Touch-Hold (Mobile)
            pauseOnClick={true} // FIX: Handles Tap (Mobile) to pause scrolling
          >
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="mx-4 md:mx-8 w-[200px] h-[100px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md transition-transform hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}