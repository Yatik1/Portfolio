import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import {projectData} from "../../../data/projectData"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

function ProjectSection() {


  function onMouseEnter(e) {
      gsap.to(e.currentTarget, {
        scale:1.035,
        duration: 0.3,
        ease: "power2.out",
      })
  }

  function onMouseLeave(e) {
    gsap.to(e.currentTarget, {
      scale:1,
      duration: 0.3,
      ease: "power2.in",
    })
  }

  function onMouseClick(e, link) {
  gsap.fromTo(
    e.currentTarget,
    { scale: 1 },
    {
      scale: 1.035,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
       if(link)  window.open(link, '_blank');
      },
    }
  );
}

  return (
    <div className='w-auto bg-white flex flex-col gap-[4rem] items-center justify-start p-5 overflow-auto'>
        {projectData.map((data,index) => (
             <div className="w-auto flex flex-col items-center justify-center" key={index}>
            <h1 className='text-[2rem] sm:text-[3rem] md:text-[4.5rem] crimsonFont tracking-tighter'>{data.title}</h1>
              <div 
              className="bg-[#E9E9E9] overflow-hidden sm:w-[60vw] flex items-center justify-center p-2 rounded-xl relative projectCard" 
              id={index} 
              onMouseEnter={onMouseEnter} 
              onMouseLeave={onMouseLeave}
              onMouseDown={(e) => onMouseClick(e, data.deployedLink)}
            >
              <Image
               src={data.src}
               alt={data.title + `image`}
              className="w-full h-full object-contain rounded-lg"
              /> 
           </div>
          </div>
        ))}
      </div>
  )
}

export default ProjectSection
