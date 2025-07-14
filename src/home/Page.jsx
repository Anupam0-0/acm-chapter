import Hero from "./sections/Hero";
import About from "./sections/About";
import AboutMore from "./sections/AboutMore";
import Hightlights from "./sections/Highlights";
import Events from "./sections/Events";
import Projects from "./sections/Projects";
import MeetTeam from "./sections/MeetTeam";
import Newsletter from "./sections/Newsletter";
import LetsConnect from "./sections/LetsConnect"

import ScrollProgress from "../lib/ScrollProgress";
import Gallery from "./sections/Gallery";
import CallToAction from "./sections/CallToAction";

const Page = () => { 

  return (
    <div className="relative">
      <Hero />
      <About />
      <AboutMore />
      <Hightlights/>
      <Events/>
      <Projects/>
      <Newsletter/>
      <MeetTeam/>
      <CallToAction />
      <Gallery/>
      <LetsConnect/>
      <ScrollProgress/>
    </div>
  );
};

export default Page;




