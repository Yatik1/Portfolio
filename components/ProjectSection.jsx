  "use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "./ui/Wrapper";
import dashboard from "@/assets/dashboardmockup.png";
import store from "@/assets/storemockup.png";
import cinemax from "@/assets/cinemaxmobilemockup.png"
import chazily from "@/assets/chazilymockup.png"
import blogbud from "@/assets/blogbudmockup.png"
import gsap from "gsap";

const projectData = [
  {
    src: dashboard,
    title: "Dashboard & CMS",
  },
  {
    src: store,
    title: "Store",
  },
  {
    src: blogbud ,
    title : "Blog Bud"
  } , 
  {
    src:cinemax ,
    title:"Cinemax"
  } ,
  {
    src:chazily,
    title:"Chazily"
  }
];

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
        <Wrapper
          key={index}
          ref={(el) => (wrapperRefs.current[index] = el)}
          styles={`relative h-[65vw] md:h-[38vw] rounded-3xl border border-stone-200 overflow-hidden cursor`}
        >
          <div className="relative w-full md:w-[46vw] h-full md:h-[27vw] overflow-hidden">
            <Image
              ref={(el) => (imgRefs.current[index] = el)}
              src={project.src}
              alt={project.title}
              className="absolute inset-0 w-full h-full"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div
            ref={(el) => (titleRefs.current[index] = el)}
            className="hidden absolute top-6 z-[999] w-full h-full opacity-0 lg:flex items-start justify-center"
          >
            <p className="inline bg-[#DDDDDD] text-[#676767] px-3 py-2 text-[0.78rem] rounded-full tracking-tighter">
              {project.title}
            </p>
          </div>
        </Wrapper>
      ))}
    </div>
  );
}

export default ProjectSection;
