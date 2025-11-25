import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';

function Footer() {
  return (
    <div className="relative -mt-[37vw] z-0 bg-[#1A472A]"> 
      <div className="
        w-[100vw] h-[100vw] pointer-events-none opacity-20
         bg-contain bg-no-repeat
      "/>

      {/* Jungle Prop Images */}
      <img src="/path/to/your/vines.png" alt="Vines" className="absolute top-0 right-0 z-5 w-[15vw] md:w-[10vw] opacity-80" />
      <img src="/path/to/your/snake.png" alt="Snake" className="absolute top-0 left-[10%] z-5 w-[12vw] md:w-[8vw] opacity-90" />
      <img src="/path/to/your/large-leaf.png" alt="Jungle Leaf" className="absolute bottom-0 left-0 z-5 w-[25vw] md:w-[15vw]" />
      <img src="/path/to/your/bushy-leaves.png" alt="Jungle Bush" className="absolute bottom-0 right-0 z-5 w-[25vw] md:w-[15vw]" />
      <img src="/path/to/your/frog.png" alt="Frog" className="absolute bottom-[5vw] right-[10vw] z-5 w-[8vw] md:w-[4vw]" />

      {/* Main Content */}
      <div className="absolute top-[63.5vw] w-[100vw] items-center flex flex-col gap-[1vw] z-10">
        
      </div>

      {/* Footer icons */}
      <div className="absolute w-[100%] bottom-0 flex justify-center items-center gap-[5vw] mb-[2vw] z-10">
        <FooterIcon src="/tech-tank/www-icon.svg" link="https://www.aisutd.org" />
        <FooterIcon src="/tech-tank/email-icon.svg" link="mailto:president@aisociety.io" />
        <FooterIcon src="/tech-tank/insta-icon.svg" link="https://www.instagram.com/utdais" />
        {/* The "Register Now" button has been removed from here */}
        <FooterIcon src="/tech-tank/yt-icon.svg" link="https://www.youtube.com/@artificialintelligencesoci9846" />
        <FooterIcon src="/tech-tank/linkedin-icon.svg" link="https://www.linkedin.com/company/ais-utd" />
        <FooterIcon src="/tech-tank/discord-icon.svg" link="https://www.aisutd.org/discord" />
      </div>
    </div>
  );
}

function FooterIcon({ src, link }) {
  return(
    <>
      <button onClick={() => window.open(link, "_blank")} className="
        h-[5vw] w-[5vw]
        sm:h-[4vw] sm:w-[4vw]
        md:h-[3vw] md:w-[3vw]
        max-h-[2rem] max-w-[2rem]
      ">
        <img src={src} className="object-contain w-full h-full" />
      </button>
    </>
  );
}

export default Footer;