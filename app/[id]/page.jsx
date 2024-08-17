"use client";

import Wrapper from "@/components/ui/Wrapper";
import { projectData } from "@/data/projectData";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

function ProjectPage() {

  const params = useParams()
  const {id} = params

  const project = projectData.find((project) => project.id === parseInt(id))

  console.log(project)

  return (
    <div className="flex flex-col items-center justify-center w-screen px-7">
      <Wrapper styles={"w-full p-[5vw]"}>
        
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <h3   
            className="w-full text-[1rem] lg:text-[1.5rem] tracking-tighter"
          >
            {project.title}
          </h3>

          <div className="flex items-start justify-start w-full gap-2">
            <Link 
              target="_blank"
              href={project.deployedLink}
              className="flex items-center justify-center gap-1 bg-[#DDDDDD] text-[#676767] p-2 text-[0.78rem] rounded-xl tracking-tighter"
            >
              <h2 className=" ">Deployed</h2>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <Link 
              target="_blank"
              href={project.githubLink}
              className="flex items-center justify-center gap-1 bg-[#DDDDDD] text-[#676767] p-2 text-[0.78rem] rounded-xl tracking-tighter"
            >
              <h2 className="">Github</h2>
              <Github className="w-4 h-4" />
            </Link>

          </div>

        </div>

        <hr className="w-full -mt-2"/>

        <div className="flex w-full items-start justify-start">
          <p className="text-[0.9rem] text-[#676767] tracking-tighter leading-[1.1rem] ">
            {project?.description}
          </p>
        </div>
        
      </Wrapper>
    </div>
  )
}

export default ProjectPage
