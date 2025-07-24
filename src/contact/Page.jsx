import { ChevronLeft, ChevronRight, Instagram, Linkedin, YoutubeIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen h-full text-2xl w-full py-10 relative ">
      {/* main body */}
      <div className="max-w-[100rem] mx-auto px-4 md:px-8 pb-36">
        <div className="py-20 ">
          <h1 className="text-8xl font-bebas-neue font-bold tracking-wide">
            The <span className="bg-blue-500 text-white px-2">community</span>{" "}
            you need, for the <span className="text--500">potential</span> you
            have.
          </h1>
        </div>

        {/* contact hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* contact box */}
          <div className="h-full w-full bg-neutral-950 text-neutral-400 rounded-4xl flex flex-col gap-5 py-10 px-6">
            <p className="text-xl font-bebas-neue font-bold text-center pb-4 ">
              Send us a message
            </p>
            <input
              type="text"
              placeholder="Name"
              className="rounded-2xl bg-neutral-900 px-5 py-3 font-inter text-xs md:text-base text-white tracking-wide font-extralight border border-neutral-800 outline-none focus:border-black"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl bg-neutral-900 px-5 py-3 font-inter text-xs md:text-base text-white tracking-wide font-extralight border border-neutral-800 outline-none focus:border-black"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="rounded-2xl bg-neutral-900 px-5 py-3 font-inter text-xs md:text-base text-white tracking-wide font-extralight border border-neutral-800 outline-none focus:border-black"
              />
            </div>

            <input
              type="text"
              placeholder="Enter Subject"
              className="rounded-2xl bg-neutral-900 px-5 py-3 font-inter text-xs md:text-base text-white tracking-wide font-extralight border border-neutral-800 outline-none focus:border-black"
            />

            <textarea
              type="text"
              rows="6"
              placeholder="Enter your message"
              className="resize-y rounded-2xl bg-neutral-900 px-5 py-3 font-inter text-xs md:text-base text-white tracking-wide font-extralight border border-neutral-800 outline-none focus:border-black"
            />

            <button className="bg-neutral-200 text-xs md:text-base  font-inter font-medium text-neutral-950 py-3 rounded-4xl">
              Submit
            </button>

            <div className="font-inter bg-neutral-900 text-center py-8 mt-6 space-y-2 rounded-2xl">
              <p className="text-xs md:text-sm uppercase font-wider text-neutral-400">Direct Email</p>
              <p className="text-neutral-50" >acmxim@acm.org</p>
            </div>
            <div className="flex gap-4" >
              <div className="h-full w-full bg-neutral-900 flex justify-center items-center py-10 size-30 rounded-2xl  cursor-pointer"><Instagram/></div>
              <div className="h-full w-full bg-neutral-900 flex justify-center items-center py-10 size-30 rounded-2xl  cursor-pointer"><Linkedin/></div>
              <div className="h-full w-full bg-neutral-900 flex justify-center items-center py-10 size-30 rounded-2xl  cursor-pointer"><YoutubeIcon/></div>

            </div>
          </div>

          {/* contact image */}
        </div>
      </div>

      {/* footer */}
      <FooterNavigation />
    </div>
  );
};

function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-max text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999] text-base md:text-lg">
      <div className="flex justify-between items-center relative top-1 ">
        <a
          href="/notice"
          className="font-inter uppercase  flex items-center group cursor-pointer"
        >
          <ChevronLeft
            size={18}
            className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300"
          />
          <p className=" ">Notice</p>
        </a>
        <a
          href="/contact"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer "
        >
          <p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">
            Contact
          </p>
        </a>
        <a
          href="/"
          className="font-inter uppercase  flex items-center group cursor-pointer"
        >
          <p className="">Home</p>
          <ChevronRight
            size={19}
            className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Page;
