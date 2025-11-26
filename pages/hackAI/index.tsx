import PastWinners from "./PastWinners";
import Hero from "./Hero";
import AboutSection from "./AboutUs";
import SponsorsSlideshow from "./Sponsors";


export default function HackAiHome() {
  return (
    <div className="pt-[5rem]">
      {/* Your other page content */}
      
      <Hero />
      <AboutSection />
      <PastWinners />
      <SponsorsSlideshow />

      {/* More content */}
    </div>
  );
}