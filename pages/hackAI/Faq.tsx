import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I get involved?",
      answer: "You can get involved by signing up for our next hackathon event. Registration details will be posted on our website and social media channels. Stay tuned for announcements!"
    },
    {
      question: "When is the next Hack AI?",
      answer: "Our next Hack AI event will be announced soon. Follow us on social media or join our mailing list to be the first to know about upcoming dates and registration information."
    },
    {
      question: "Do I need prior experience to take part?",
      answer: "No prior experience is necessary! Hack AI welcomes participants of all skill levels. Whether you're a beginner or an experienced developer, there's a place for you at our event."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#FFF8F3] to-[#E5D5D8] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-6xl font-serif text-gray-800 mb-12">FAQ</h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-400">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-6 text-left hover:opacity-70 transition-opacity"
              >
                <h3 className="text-2xl font-serif text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}