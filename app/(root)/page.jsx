"use client";

import React, { useEffect, useRef, useState } from 'react';

import ProjectSection from "../components/sections/ProjectSection.jsx"
import Hero from "../components/sections/Hero.jsx"
import Circular from "../components/Circular.jsx"

function Page() {

  const projectRef = useRef(null)
  const [position, setPosition] = useState({ x: -10, y: -10 });
  const [loading, setLoading] = useState(true)
  const [count,setCount] = useState(3)
  const intervalRef = useRef(null)

  useEffect(() => {
      intervalRef.current = setInterval(() => {
        setCount(prev => {
          if(prev>=100) return 100;
          return prev + Math.floor(Math.random() * 23) + 1
        })
      },200)

      return () => clearInterval(intervalRef.current)

  },[])

  useEffect(() => {
    if(count>=100) {
      clearTimeout(intervalRef.current)
      setLoading(false)
    }
  },[count])

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  if(loading) {
    return(
      <div className="w-full h-screen bg-black text-white relative">
        <p className='absolute z-10 top-2 sm:bottom-2 right-5 font-bold text-[3rem]'>
           {count > 100 ? "100" : count}%
          </p>
      </div>
    )
  }

  return (
    <main className='w-full h-screen relative px-2'>
      <Hero  onProjectsClick={() => projectRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <div ref={projectRef}>
        <ProjectSection />
      </div>
      <Circular x={position.x} y={position.y} />
    </main>
  );
}

export default Page;
