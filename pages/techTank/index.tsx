import Head from 'next/head';
import * as React from 'react';
import Appbar from './Appbar'
import Landing from './Landing'
import AboutSection from './AboutSection';
import Schedule from './Schedule';
import FAQs from './FAQs';
import Partners from './Partners';
import Snowfall from 'react-snowfall';

export default function HomePage() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (secName) => {
    setAnchorEl(null);
    document.getElementById(secName).scrollIntoView()
  };
  return (
    <>
      <Head>
        <title>Tech Tank</title>
        <meta
          name="description"
          content="Welcome to Tech Tank!"
        />
      </Head>
      <main className="min-h-screen w-[100%] bg-hai-dark-green text-ais-white subpixel-antialiased overflow-x-hidden z-0">
        <section id="landing" className="relative h-[100vh] z-10">
          <Landing/>
        </section>
        <section id="about" className="relative z-20">
          <AboutSection/>
        </section>
        <div className="absolute h-[4rem] w-[100%] backdrop-blur-[4px] -mt-[2rem] z-30"/>
        <section id="schedule" className="relative z-0">
          <Schedule />
        </section>
        <section id="faqs" className="relative bg-[url('/techTank2025/faqBackground.png')]">
          <FAQs />
        </section>
        {/*footer is inside this section since it overlaps with it*/}
        <section id="partners" className="">
          <Partners/>
        </section>
      </main>
    </>
  );
}
