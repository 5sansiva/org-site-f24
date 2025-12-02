import React from 'react';

interface Winner {
  id: number;
  projectName: string;
  year: string;
  place: string;
  imageUrl?: string;
}

const PastWinners: React.FC = () => {
  // Sample data - replace with your actual winners data
  const winners: Winner[] = [
    {
      id: 1,
      projectName: "Bifocal",
      year: "2025",
      place: "1st Place",
      imageUrl: "/hackai/1st.jpg"
    },
    {
      id: 2,
      projectName: "Smile",
      year: "2025",
      place: "2nd Place",
      imageUrl: "/hackai/2nd.jpg"
    },
    {
      id: 3,
      projectName: "Catch Up",
      year: "2025",
      place: "3rd Place",
      imageUrl: "/hackai/3rd.jpg"
    }
  ];

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#F5DEB3' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-black">
          Past Winners
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner) => (
            <div 
              key={winner.id}
              className="bg-gray-300 rounded-lg p-6 shadow-md hover:scale-105"
            >
              <div className="bg-white w-full aspect-video mb-4 rounded">
                {winner.imageUrl && (
                  <img 
                    src={winner.imageUrl} 
                    alt={`${winner.projectName} - ${winner.year}`}
                    className="w-full h-full object-cover rounded"
                  />
                )}
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-black">
                  {winner.projectName} – {winner.year}
                </p>
                <p className="text-black">
                   {winner.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWinners;