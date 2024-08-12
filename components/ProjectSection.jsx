"use client"

import { useRef } from "react"

import Image from "next/image"
import Wrapper from "./ui/Wrapper"
import dashboard from "@/assets/dashboardmockup.png"
import chazily from "@/assets/chazilymockup.png"
import cinemax from "@/assets/cinemaxmobilemockup.png"
import store from "@/assets/storemockup.png"
import blogbud from "@/assets/blogbudmockup.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


function ProjectSection() {

  const wrapperRef = useRef(null)
  const imgRef = useRef(null)
  const titleRef = useRef(null)

  useGSAP(() => {
    if(wrapperRef.current) {
      function onmouseEnter() {
        gsap.to(imgRef.current , {
          scale : 1.1 , 
          duration : 1 ,
        })

        gsap.fromTo(
          titleRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.3 }
        );
      }

      function onmouseLeave() {
        
        gsap.to(imgRef.current , {
          scale:1 , 
          duration : 1,
        })

        gsap.to(titleRef.current, {
          opacity: 0,
          y: -100,
          duration: 0.7,
          delay:0.3
        });

      }

      wrapperRef.current.addEventListener("mouseenter" , onmouseEnter)
      wrapperRef.current.addEventListener("mouseleave" , onmouseLeave)
    }
  } , [wrapperRef.current , imgRef.current , titleRef.current])

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center w-full mb-3 px-5"> 
      
      <Wrapper ref={wrapperRef} styles="relative h-[65vw] md:h-[38vw] rounded-3xl border border-stone-200 overflow-hidden">
        
        <div className="relative w-full md:w-[46vw] h-[50vw] md:h-[27vw] overflow-hidden" >
          <Image 
            ref={imgRef}
            src={store}
            alt="image"
            className="absolute inset-0 w-full h-full"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div ref={titleRef} className="hidden absolute top-6 z-[999] w-full h-full opacity-0 lg:flex items-start justify-center">
          <p className="inline bg-[#DDDDDD] text-[#676767] px-3 py-2 text-[0.78rem] rounded-full tracking-tighter">Store</p>
        </div>

      </Wrapper>

      <Wrapper styles="h-[65vw] md:h-[38vw] rounded-3xl border border-stone-200">
        <div className="relative w-full md:w-[46vw] h-[50vw] md:h-[27vw] overflow-hidden">
          <Image 
            src={blogbud}
            alt="image"
            className="absolute inset-0 w-full h-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Wrapper>

      <Wrapper styles="h-[65vw] md:h-[38vw] rounded-3xl border border-stone-200">
        <div className="relative w-full md:w-[46vw] h-[50vw] md:h-[27vw] overflow-hidden">
          <Image 
            src={dashboard}
            alt="image"
            className="absolute inset-0 w-full h-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Wrapper>

      <Wrapper styles="h-[65vw] md:h-[38vw] rounded-3xl border border-stone-200">
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src={cinemax}
            alt="image"
            className="absolute inset-0 w-full h-full"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Wrapper>

      <Wrapper styles="h-[65vw] md:h-[38vw] rounded-3xl border border-stone-200">
        <div className="relative w-full md:w-[46vw] h-[50vw] md:h-[27vw] overflow-hidden">
          <Image 
            src={chazily}
            alt="image"
            className="absolute inset-0 w-full h-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Wrapper>


    </div>
  )
}

export default ProjectSection


// const projects = [
  //     {
  //       name:"Store",
  //       description:"Ecommerce web-application",
  //       githubLink: "https://github.com/Yatik1/Nextjs-ecommerce",
  //       deployedLink: "https://store-orcin-iota.vercel.app/"
  //     } ,
  //     {
  //       name:"Dashboard & CMS",
  //       description:"Ecommerce dashboard and content management system",
  //       githubLink: "https://github.com/Yatik1/Ecommerce-admin-panel",
  //       deployedLink: "https://estore-admin-panel-orcin.vercel.app/"
  //     },
  //     {
  //       name:"Chazily",
  //       description:"Chat web-application",
  //       githubLink: "https://github.com/Yatik1/chat-app",
  //       deployedLink: "https://chazily.vercel.app/"
  //     } ,
  //     {
  //       name:"Cinemax",
  //       description:"Movie information website",
  //       githubLink: "https://github.com/Yatik1/stream-app",
  //       deployedLink: "https://cinemax-eight.vercel.app/"
  //     },
  //     {
  //       name:"Carhub",
  //       description:"Car rental website",
  //       githubLink: "https://github.com/Yatik1/car-showcase-webapp",
  //       deployedLink: "https://car-showcase-webapp-gvtr.vercel.app/"
  //     }
  //   ]
  // //grid gap-4 sm:grid-cols-2