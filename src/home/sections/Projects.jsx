import { motion } from "framer-motion";
import Img3 from "/src/assets/img1.jpg";
import { TextAnimate } from "../../components/magicui/TextAnimate";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calendar,
  ChartColumnStacked,
  Monitor,
  Satellite,
  Smartphone,
  Star,
  Users,
} from "lucide-react";

// Data for projects
const projectsData = [
  {
    title: "Web Development",
    bgColor: "bg-sky-200",
    microBg: "bg-blue-50",
    cardTextColor: "text-blue-500",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 4 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 5 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
    ],
  },
  {
    title: "Data Science",
    bgColor: "bg-orange-200",
    microBg: "bg-orange-50",
    cardTextColor: "text-orange-500",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      // ...add more projects as needed
    ],
  },
  {
    title: "Internet of Things",
    bgColor: "bg-red-200",
    microBg: "bg-red-50",
    cardTextColor: "text-red-500",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      // ...
      // add more projects as needed
    ],
  },
  {
    title: "And more...",
    bgColor: "bg-cyan-200",
    microBg: "bg-cyan-50",
    cardTextColor: "text-cyan-600/80",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      // ...add more projects as needed
    ],
  },
];

// Main Projects Component
const Projects = () => {
  return (
    <div className="min-h-screen text-2xl w-full hidden md:block">
      <div className="flex relative">
        <SidePanel />
        <StackPanel projectsData={projectsData} />
      </div>
    </div>
  );
};

export default Projects;

// Side Panel Component
function SidePanel() {
  // Array of featured project categories for the side panel
  const featuredCategories = [
    {
      label: "Web Development",
      icon: <Monitor size={18} />,
    },
    {
      label: "App Development",
      icon: <Smartphone size={18} />,
    },
    {
      label: "Data Science",
      icon: <ChartColumnStacked size={18} />,
    },
    {
      label: "AI/ML",
      icon: <Bot size={18} />,
    },
    {
      label: "Internet of Things",
      icon: <Satellite size={18} />,
    },
    {
      label: "And more...",
      icon: null,
    },
  ];

  function FeaturedCategoryList({ categories }) {
    return (
      <ul className="list-none flex flex-col cursor-pointer gap-3 lg:gap-5 w-fit">
        {categories.map((cat, idx) => (
          <a key={idx} className="ml-0 hover:ml-1 group flex">
            <motion.span
              whileHover={{ x: 2 }}
              className=" group-hover:block hidden"
            >
              {"->"}
            </motion.span>
            &nbsp;
            <span className="flex items-center gap-4 ">
              {cat.icon} {cat.label}
            </span>
          </a>
        ))}
      </ul>
    );
  }

  function ProjectsButton() {
    return (
      <button className="group bg-neutral-950 text-neutral-100 text-xs lg:text-sm xl:text-lg px-1 pl-5 py-1 rounded-4xl w-fit cursor-pointer flex justify-between gap-6 items-center relative">
        <span className="relative -top-[1px] whitespace-nowrap">
          Go to projects page
        </span>
        <span className=" bg-[#73aaff] rounded-full p-1 size-8 overflow-hidden">
          <ArrowUpRight
            className="relative text-black bottom-0 left-0 group-hover:bottom-5 group-hover:left-4.5 transition-all duration-300 ease-in-out"
            size={24}
            strokeWidth="1.5px"
          />
          <ArrowUpRight
            className="relative text-black -bottom-5 -left-10 group-hover:bottom-6 group-hover:left-0 transition-all duration-300 ease-in-out"
            size={24}
            strokeWidth="1.5px"
          />
        </span>
      </button>
    );
  }

  return (
    <div className="h-[calc(100vh-4.5rem)] sticky top-18 w-1/4 flex items-center justify-center shadow-r-xl bg-blue-500">
      <div className="relative rounded-xl w-full">
        <div className="flex flex-col justify-between 3xl:justify-start 3xl:p-20 3xl:gap-14 gap-6 h-[calc(100vh-5.5rem)] mx-2 2xl:my-2 bg-neutral-50 text-neutral-950 py-8 px-6 2xl:px-8 relative rounded-xl ">
          <h1 className="font-bebas-neue font-black relative text-shadow-xs w-fit z-1  text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <span className="text-black">Featured</span> <br />
            <span className="text-blue-500">Projects</span>
          </h1>
          <div className="text-neutral-800 text-xs lg:text-sm xl:text-base 2xl:mb-6 font-inter relative">
            <FeaturedCategoryList categories={featuredCategories} />
          </div>
          <ProjectsButton />
        </div>
      </div>
    </div>
  );
}

// Stack Panel Component
function StackPanel({ projectsData }) {
  return (
    <div className="w-3/4  ">
      {projectsData.map((section, idx) => (
        <ProjectSection
          key={idx}
          title={section.title}
          bgColor={section.bgColor}
          microBg={section.microBg}
          cardTextColor={section.cardTextColor}
          projects={section.projects}
        />
      ))}
    </div>
  );
}

// Project Section Component
function ProjectSection({ title, bgColor, microBg, cardTextColor, projects }) {
  return (
    <div
      className={`flex flex-col justify-between relative pt-8 xl:pt-16  ${bgColor}`}
    >
      <div className="pl-max 2xl:-left-4 relative">
        <h1 className="relative font-bebas-neue font-black text-shadow-xs text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl z-10">
          <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
            {title}
          </TextAnimate>
        </h1>
      </div>

      <div className="absolute bottom-2 lg:bottom-4 xl:bottom-6 2xl:bottom-8 right-16 z-[100] text-neutral-800 text-base font-inter flex items-center gap-1 ">
        Scroll to explore <ArrowRight size={16} strokeWidth="1.5px" />{" "}
      </div>

      <div className="flex gap-6 px-8 xl:pl-16 overflow-auto ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            microBg={microBg}
            cardTextColor={cardTextColor}
          />
        ))}
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ index, project, microBg, cardTextColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 1, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col gap-1 p-1 items-center rounded-xl bg-neutral-50 hover:bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 overflow-clip relative group shadow-md cursor-pointer my-20 z-[200]"
    >
      <div className="h-full p-1 w-[20rem] lg:w-[30rem] aspect-video overflow-clip relative">
        <img
          src={project.image}
          alt=""
          className="object-cover h-full scale-100 z-10 hover:scale-101 transition-all ease-in-out rounded-xl duration-300"
        />
        <div className="absolute inset-0 w-full scale-103 bg-neutral-50/0 hover:bg-neutral-50/10 z-20 rounded-xl" />

        {/* <div className="absolute h-20 bottom-1 w-full scale-103 bg-gradient-to-b from-neutral-50/0 to-neutral-50 z-20 rounded-xl" /> */}
      </div>

      <div className="w-full font-inter flex flex-col justify-between gap-1 lg:gap-2 py-1.5 px-2">
        <div className="flex max-w-fit gap-2 ">
          {project.stack.map((key, i) => (
            <div
              className={`h-fit text-[8px] lg:text-xs rounded-xl  ${microBg} ${cardTextColor} py-0.5  px-3  `}
              key={i}
            >
              {key}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center relative">
          <h2 className="text-base py-1 lg:text-2xl font-semibold flex justify-start gap-2 items-center">
            <ArrowRight
              strokeWidth="1.7px"
              className={`size-6 -left-12 group-hover:left-0  relative group-hover:block  transition-all duration-300 ease-in-out `}
            />
            <p className="relative -left-8 group-hover:left-0 transition-all duration-300 ease-in-out ">
              {project.name}
            </p>
          </h2>
          <motion.span className=" right-1 group-hover:-right-12 absolute rounded-full text-black/80 transform-all ease-in-out  duration-300">
            <ArrowUpRight
              strokeWidth="1.8px"
              className={`size-6 rotate-0 group-hover:rotate-45 transition-all duration-300 ease-in-out `}
            />
          </motion.span>
        </div>

        <p
          className={`text-[10px] pl-0.5 lg:text-sm max-w-md text-neutral-500`}
        >
          {project.description}
        </p>

        <div className="relative pt-4 pl-1 flex justify-between text-[10px] lg:text-sm px-2 text-neutral-500">
          <span className="flex gap-4">
            <p className="flex gap-2">
              <Star size={16} /> 8
            </p>
            <p className="flex gap-2">
              <Users size={16} /> 5
            </p>
          </span>

          <p className="flex gap-2">
            <Calendar size={16} /> 5 months ago
          </p>
        </div>
      </div>
    </motion.div>
  );
}
