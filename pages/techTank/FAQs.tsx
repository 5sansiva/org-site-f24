import { Typography } from "@mui/material";
import Image from "next/image";

const questions = [
  {
    icon: "/tech-tank/faq-icons/robot.svg",
    heading: "What is a makeathon?",
    body: <>A 1-day tech event for students to learn new skills, develop cool software project ideas, and meet tons of other students and professionals. Our event will start off with a morning of workshops, followed by a lunchbreak, and then the makeathon will begin.</>
  },
  {
    icon: "/tech-tank/faq-icons/handhshake.svg",
    heading: "Do I need to have a team?",
    body: <>Although you can work in up to a team of <b>4</b>, you do not have to have a team. We will have a team matching session for those who don&apos;t already have one.</>
  },
  {
    icon: "/tech-tank/faq-icons/person.svg",
    heading: "Who can attend?",
    body: <>You must be a <b>UTD student</b> at least <b>18 years</b> of age. However, non-STEM majors, beginner coders, and even those with <b>zero AI experience</b> are welcomed and encouraged to join us! This event is meant to introduce AI to everyone. All you need is a drive and passion to learn!</>
  },
  {
    icon: "/tech-tank/faq-icons/wallet.svg",
    heading: "How much does it cost?",
    body: <>There will be food, awesome workshops, and swag, all completely <b>FREE</b>!</>
  },
  {
    icon: "/tech-tank/faq-icons/computer.svg",
    heading: "What projects should I expect?",
    body: <>Project ideas will be centered around various AI topics including Natural Language Processing, Machine Learning, Data Analytics, and more. The morning workshops will provide insight and context on what you should be thinking about when coming up with your solution.</>
  },
];

function DisplayListOfQuestions() {
  return (
    <>
      {questions.map((obj, index) => (
        <div key={index} className={index === questions.length - 1 ? "" : "mb-5"}>
          <div className="mb-1 flex items-center gap-1.5">
            <img src={obj.icon} className="h-5" alt="" />
            <Typography className="font-placard tracking-wider text-xl font-medium text-ais-black">
              {obj.heading}
            </Typography>
          </div>
          <Typography className="font-roboto text-base text-ais-black">
            {obj.body}
          </Typography>
        </div>
      ))}
    </>
  );
}

function FAQs() {
  return (
    // Added padding here to give the section some height
    <section className="relative w-full py-20">
      
      {/* 1. This is the main background image for the whole section */}
      <Image
        // Make sure this path is correct!
        src="/techTank2025/your-background-image.png"
        alt="FAQ section background"
        fill
        priority
        className="object-cover -z-10" // Puts the image behind all other content
      />

      {/* 2. Your content, layered on top of the background */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Changed text to white for better contrast against the dark background */}
        <div className="font-placard font-bold text-slate-800 text-5xl tracking-wider mb-2">
          FAQS
        </div>
        <Typography className="font-roboto text-center text-slate-800 text-lg tracking-wide px-4 mb-8">
          Please reach out to us on Discord if you have any additional questions!
        </Typography>

        {/* 3. The glass card, which sits on top of the main background */}
        <div className="w-[85vw] max-w-4xl p-8 flex flex-col bg-[url('/tech-tank/glass.svg')] bg-cover bg-center bg-no-repeat">
          <DisplayListOfQuestions />
        </div>
      </div>
    </section>
  );
}

export default FAQs;