import * as React from "react";
import Image from "next/image";

const LandingSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* New background image */}
      <Image
        src="/techTank2025/homepage.png" // <-- replace with your new image
        alt="Landing Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1
          className="text-4xl font-bold text-yellow-600 md:text-6xl"
          style={{ WebkitTextStroke: "2px #000" }}
        >
          AIS
        </h1>
        <h2
          className="my-4 text-6xl font-black leading-none text-yellow-400 md:text-9xl lg:text-[12rem]"
          style={{ WebkitTextStroke: "6px #000" }}
        >
          TECH TANK
        </h2>
        <h3
          className="text-xl font-bold text-yellow-400 md:text-3xl"
          style={{ WebkitTextStroke: "2px #000" }}
        >
          SATURDAY, OCTOBER 4TH, 2025
        </h3>

        {/* Button */}
        <button
          onClick={() =>
            window.open(
              "https://coda.io/form/Tech-Tank-Application_dQjHEJqhY-P",
              "_blank"
            )
          }
          className="mt-8 rounded-lg border-2 border-yellow-400 bg-green-500 px-6 py-3 text-white font-bold hover:scale-105 transition-transform"
        >
          Click Me
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
