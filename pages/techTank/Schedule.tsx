import * as React from "react";

function Schedule() {
  // --- Schedule Data ---
  // You can easily update your schedule information here.
  const schedulePoints = [
    { time: "9:00 AM:", event: "CHECK-IN", style: { top: '35%', left: '8%' }, textPosition: 'top' },
    { time: "10:00 AM:", event: "KICKOFF", style: { top: '75%', left: '18%' }, textPosition: 'bottom' },
    { time: "10:30 AM:", event: "TEAM-BUILDING", style: { top: '25%', left: '30%' }, textPosition: 'top' },
    { time: "11:30 AM:", event: "WORKSHOP 1", style: { top: '65%', left: '45%' }, textPosition: 'bottom' },
    { time: "12:30 PM:", event: "WORKSHOP 2", style: { top: '40%', left: '58%' }, textPosition: 'top' },
    { time: "1:30 PM:", event: "LUNCH (FREE) & PITCH WORKSHOPS", style: { top: '80%', left: '68%' }, textPosition: 'bottom' },
    { time: "2:30 PM:", event: "TEAM SUBMISSIONS DUE", style: { top: '30%', left: '78%' }, textPosition: 'top' },
    { time: "4:30 PM:", event: "PITCH CONTEST & CLOSING CEREMONY", style: { top: '60%', left: '88%' }, textPosition: 'bottom' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#333A40] text-white font-sans">
      
      {/* Flamingo Image - positioned top-left */}
      <img
        src="/techTank2025/flamingo.png"
        alt="Flamingo"
        className="absolute top-16 left-0 z-0 w-[20%] max-w-[150px] transform -translate-x-1/4 -translate-y-1/4 md:w-[15%] lg:w-[10%]"
      />

      {/* Tiger Image - positioned bottom-right */}
      <img
        src="/techTank2025/tiger.png"
        alt="Tiger"
        className="absolute bottom-0 right-0 z-0 w-[20%] max-w-[150px] transform translate-x-1/4 translate-y-1/4 md:w-[15%] lg:w-[10%]"
      />

      {/* Top-left corner silhouette */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 text-[#2A3136] opacity-70">
        <svg fill="currentColor" viewBox="0 0 200 200">
            <path d="M12.5,134.5c0,0-12-19-4-39s20-32,32-40s28-16,40-20s28-12,39-4s20,20,28,36s12,32,4,48s-20,32-36,40s-32,12-48,4 S20.5,150.5,12.5,134.5z"></path>
        </svg>
      </div>

      {/* Bottom-right corner silhouette */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 text-[#2A3136] opacity-70">
        <svg fill="currentColor" viewBox="0 0 200 200" className="transform scale-x-[-1] scale-y-[-1]">
          <path d="M43.1,128.9c25.7-2.4,47.5-12.7,62.9-29.3c15.4-16.6,24.5-39.6,23.3-62.2C128.1,13,103.5,2,79.5,2 c-24,0-47,11-58.8,32.1c-11.8,21.1-12.4,49.2-1.6,71.2C29.8,126.5,36.1,129.8,43.1,128.9z"></path>
        </svg>
      </div>

      {/* TechTank 2025 Logo in top-right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex flex-col items-center bg-[#2A3136] p-2 md:p-4 rounded-lg">
        <div className="w-16 h-16 md:w-20 md:h-20 text-green-200">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-6" />
                <path d="M12 16a6 6 0 0 1-6-6V8" />
                <path d="m10 6 2-2 2 2" />
                <path d="M18 10v2a6 6 0 0 1-6 6" />
                <path d="M10 10a2 2 0 1 0-4 0" />
                <path d="M18 8a2 2 0 1 1-4 0" />
                <path d="M6 14a2 2 0 1 0-4 0" />
                <path d="M12 6a2 2 0 1 1-4 0" />
                <path d="M16 14a2 2 0 1 0 4 0" />
            </svg>
        </div>
        <p className="text-sm md:text-lg font-bold text-green-200 tracking-wider">TECHTANK</p>
        <p className="text-xs md:text-sm text-green-300">2025</p>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4 md:mb-16" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          SCHEDULE
        </h1>

        {/* Timeline container */}
        <div className="relative w-full max-w-6xl mx-auto h-48 md:h-64">
          
          {/* PLACE YOUR VINE PNG HERE */}
          <div className="absolute inset-0">
            <img
              src="/techTank2025/vine.png"
              alt="Timeline Vine"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Mapping over schedule points to place them */}
          {schedulePoints.map((item, index) => (
            <div key={index} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={item.style}>
              <div className={`relative flex ${item.textPosition === 'top' ? 'flex-col-reverse items-center' : 'flex-col items-center'}`}>
                  
                  {/* Text content for the schedule point */}
                  <div className={`text-center p-2 ${item.textPosition === 'top' ? 'mb-8' : 'mt-8'}`}>
                      <p className="font-bold text-sm md:text-base">{item.time}</p>
                      <p className="text-xs md:text-sm text-yellow-200">{item.event}</p>
                  </div>
                  
                  {/* PLACE YOUR LEAF PNG HERE */}
                  <div className="w-12 h-12 md:w-16 md:h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img
                      src="/techTank2025/leaf.png"
                      alt="Schedule Point Leaf"
                      className="w-full h-full object-contain"
                    />
                  </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Schedule;

