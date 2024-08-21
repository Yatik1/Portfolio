"use client";

import Wrapper from "@/components/ui/Wrapper";
import { projectData } from "@/data/projectData";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function ProjectPage() {

  const params = useParams()
  const {id} = params

  const project = projectData.find((project) => project.id === parseInt(id))

  return (
    <div className="flex flex-col items-center justify-center px-7 gap-3 mb-4">

      <Wrapper styles="w-full h-full md:h-screen">
        <div className="relative w-full h-[80vw] md:h-[30vw] overflow-hidden">
        <Image
              src={project.src.src}
              alt={project.title}
              className="absolute inset-0 w-full h-full"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </Wrapper>

      <Wrapper styles={"w-full px-[5vw] py-[2.5vw]"}>
        
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h3   
            className="text-[2rem] md:text-[1.8rem] tracking-tighter"
          >
            {project.title}
          </h3>

          <div className="flex items-center justify-center w-full gap-2">
            <Link 
              target="_blank"
              href={project.deployedLink}
              className="flex items-center justify-center gap-1 bg-[#DDDDDD] text-[#676767] p-2 text-[0.78rem] rounded-xl tracking-tighter"
            >
              <h2>Deployed</h2>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <Link 
              target="_blank"
              href={project.githubLink}
              className="flex items-center justify-center gap-1 bg-[#DDDDDD] text-[#676767] p-2 text-[0.78rem] rounded-xl tracking-tighter"
            >
              <h2>Github</h2>
              <Github className="w-4 h-4" />
            </Link>

          </div>

        </div>

        <hr className="w-full -mt-2"/>

        <div className="flex w-full items-start justify-start">
          <p className="text-[0.9rem] md:text-[1.1rem] text-[#676767] tracking-tighter leading-[1.1rem] md:leading-normal">
            {project?.description}
          </p>
        </div>

        <div className="hidden sm:flex flex-wrap gap-2 w-full items-center justify-center px-2">
          {project?.techs.map((tech, index) => (
            <p 
              key={index}
              className="flex items-center justify-center gap-1 bg-[#DDDDDD] text-[#676767] p-2 text-[0.78rem] rounded-xl tracking-tighter hover:bg-black hover:text-white cursor-default"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex sm:hidden flex-wrap gap-2 w-full items-start justify-start px-2">
          {project?.techs.map((tech, index) => (
            <p 
              key={index}
              className="flex items-center justify-center gap-1 bg-[#DDDDDD] text-[#676767] p-2 text-[0.78rem] rounded-xl tracking-tighter hover:bg-black hover:text-white cursor-default"
            >
              {tech}
            </p>
          ))}
        </div>
        
      </Wrapper>
    </div>
  )
}

export default ProjectPage
