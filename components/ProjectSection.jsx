  "use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "./ui/Wrapper";
import gsap from "gsap";
import { motion} from "framer-motion";
import Link from "next/link";
import { projectData } from "@/data/projectData";


function ProjectSection() {

  const wrapperRefs = useRef([]);
  const imgRefs = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {

    wrapperRefs.current.forEach((wrapperRef, index) => {
      if (wrapperRef) {
        function onMouseEnter() {
          gsap.to(imgRefs.current[index], {
            scale: 1.1,
            duration: 1,
          });

          gsap.fromTo(
            titleRefs.current[index],
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, }
          );
        }

        function onMouseLeave() {
          gsap.to(imgRefs.current[index], {
            scale: 1,
            duration: 1,
          });

          gsap.to(titleRefs.current[index], {
            opacity: 0,
            y: -100,
            duration: 0.7,
          });
        }

        wrapperRef.addEventListener("mouseenter", onMouseEnter);
        wrapperRef.addEventListener("mouseleave", onMouseLeave);

      }
    });
  }, []);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center w-full mb-3 px-5">
      {projectData.map((project, index) => (
        <Link href={`/${project.id}`} key={project.id} >
          <Wrapper
          key={index}
          ref={(el) => (wrapperRefs.current[index] = el)}
          styles="relative h-[65vw] md:h-[38vw] rounded-3xl overflow-hidden cursor drop-shadow-sm"
        >
          <motion.div 
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.42, 0, 0.58, 1],
            }}
            className="relative w-full md:w-[46vw] h-full md:h-[27vw] overflow-hidden ">
            <Image
              ref={(el) => (imgRefs.current[index] = el)}
              src={project.src}
              alt={project.title}
              className="absolute inset-0 w-full h-full"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <div
            ref={(el) => (titleRefs.current[index] = el)}
            className="hidden absolute top-6 z-[999] w-full h-full opacity-0 lg:flex items-start justify-center"
          >
            <p className="inline bg-[#DDDDDD] text-[#676767] px-3 py-2 text-[0.78rem] rounded-full tracking-tighter">
              {project.title}
            </p>
          </div>
        </Wrapper>
      </Link>
      ))}
    </div>
  );
}

export default ProjectSection;
