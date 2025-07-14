import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen text-2xl w-full p-10 relative'>
      Contact us Page

    <FooterNavigation/>
    </div>
  )
}

function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-max text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999] text-base md:text-lg">
      <div className="flex justify-between items-center relative top-1 ">
        <a href="/notice" className="font-inter uppercase  flex items-center group cursor-pointer">
          <ChevronLeft size={18} className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300" />
          <p className=" ">Notice</p>
        </a>
        <a href="/contact" className="font-inter uppercase text-lg flex items-center group cursor-pointer ">
          <p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">Contact</p>
        </a>
        <a
          href="/"
          className="font-inter uppercase  flex items-center group cursor-pointer"
        >
          <p className="" >Home</p>
          <ChevronRight size={19} className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Page