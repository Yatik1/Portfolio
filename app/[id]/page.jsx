"use client";

import { projectData } from "@/data/projectData";
import { useParams } from "next/navigation";

function ProjectPage() {

  const params = useParams()
  const {id} = params

  const project = projectData.filter((project) => project.id === parseInt(id))

  console.log(project)

  return (
    <div>
      {id}
    </div>
  )
}

export default ProjectPage
