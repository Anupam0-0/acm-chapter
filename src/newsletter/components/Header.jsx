import { div } from "framer-motion/client";
import React from "react";

const Header = () => {
  return (
    <div className="relative">
      <div className="font-bebas-neue text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
        Newsletter
      </div>
      <div 
        className="relative text-right font-outline-4 font-bebas-neue -top-0 right-0 text-[14rem] text-blue-50 whitespace-nowrap">
        Newsletter
      </div>
    </div>
  );
};

export default Header;
