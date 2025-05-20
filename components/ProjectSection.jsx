"use client";

import { LucideArrowUpRight } from "lucide-react";
import { projectData } from "../data/projectData";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


function ProjectSection() {

  return (
    <div className="md:h-screen w-full flex items-center justify-center mt-6 px-3">
      <div className="bg-gradient-to-br from-[#09090B] via-stone-800 to-[#666666] w-[90vw] md:w-[95.5vw] h-full md:h-[49vw] rounded-xl flex flex-col items-center justify-between overflow-hidden px-3">
        <h2 className="text-white text-[3.5rem] tracking-tighter  hover:border-b border-white mt-3 md:mt-10">
          Projects
        </h2>

        <div className="w-full overflow-y-auto md:overflow-x-auto whitespace-nowrap noscroll">
          <ScreenProjects />
          <MobileProjects />
        </div>
      </div>
    </div>
  );
}

function ScreenProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="hidden md:block">
      {projectData.map((project, index) => (
        <div           
          key={index}
          className="inline-block"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <div key={project.title} className="flex items-center justify-start ml-4 mb-1 gap-1 text-white w-fit border-b border-white border-dotted">
              {project.deployedLink ? (
                <Link 
                  href={project.deployedLink} 
                  target="_blank" 
                  className="lowercase pixelFont hover:text-gray-300 transition-colors"
                >
                  {project.title === "Zone" ? "Launch soon" : project.title}
                </Link>
              ) : (
                <span className="lowercase pixelFont text-gray-500">
                  {project.title === "Zone" ? "Launch soon" : project.title}
                </span>
              )}
              <LucideArrowUpRight className="w-[0.8rem] h-[0.8rem]" />
            </div>
          )}

          <div 
            style={{ width: project.cardWidth, height: project.cardHeight }}
            className={`rounded-[12px] relative overflow-hidden ${project.bg} mx-[0.25rem]`}
          >
          
          {project.src ? (
            <Image
              src={project.src}
              alt={project.title}
              className={`absolute ${project.position}`}
            />
          ) : (
            <div className="bg-gradient-to-r from-[#48453F] to-[#716A64] bg-clip-text text-transparent flex items-center justify-center h-full text-[3rem] tracking-tighter font-bold">
              {project.title}
            </div>
          )}
        </div>
        </div>
      ))}
    </div>
  );
}

function MobileProjects() {
  return (
    <div className="block md:hidden">
      {projectData.map((project, index) => (
        <div           
          key={index}
          className="flex flex-col items-center justify-center my-2"
        >
          <Link 
            href={project.deployedLink}
            target="_blank"
            style={{ width: "100%", height: "20rem" }}
            className={`rounded-[12px] relative overflow-hidden ${project.bg}`}
          >
          
          {project.src ? (
            <Image
              src={project.src}
              alt={project.title}
              className={`absolute ${project?.title === "chazel" ? "bottom-0" : "top-10"} left-1/2 -translate-x-1/2 rounded-t-xl`}
            />
          ) : (
            <div className="bg-gradient-to-r from-[#48453F] to-[#716A64] bg-clip-text text-transparent flex items-center justify-center h-full text-[3rem] tracking-tighter font-bold">
              {project.title}
            </div>
          )}
        </Link>
        </div>
      ))}
    </div>
  )
}

export default ProjectSection;
