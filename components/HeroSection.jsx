"use client";


import { motion } from "framer-motion";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Wrapper from "./ui/Wrapper";

function HeroSection() {

    const buttonRef = useRef(null)
    const router = useRouter()
    const isMobile = useRef(false)

    let content = "Driven by the craft of building elegant and intuitive user interfaces, I transform ideas into visually compelling web experiences that are both functionally robust and aesthetically refined.";
    const words = content.split(" ");


    useEffect(() => {

        if (typeof window !== "undefined") {
            isMobile.current = window.innerWidth <= 768;

            const handleResize = () => {
                isMobile.current = window.innerWidth <= 768;
            };

            window.addEventListener('resize', handleResize);

            if(!isMobile.current && buttonRef.current) {
    
                function mouseEnter() {
                    gsap.to(buttonRef.current , {
                        width: "6rem",
                        duration:0.67,
                        ease:"power4.out"
                    })
                }
        
                function mouseLeave() {
                    gsap.to(buttonRef.current , {
                        width: "40px",
                        duration:0.5,
                        ease:"power4.out"
                    })
                }
        
                    buttonRef.current.addEventListener("mouseenter" , mouseEnter)
                    buttonRef.current.addEventListener("mouseleave" , mouseLeave)
                }
        }
    } , [])    

    return (
        <Wrapper styles="w-[90vw] md:w-[95vw] h-[90vw] md:h-[49vw] border border-[#F2F4E4] shadow shadow-lg">
        
        <h3 
            className="w-full text-center text-[1.1rem] lg:text-[1.5rem] tracking-tighter leading-[1.2rem] lg:leading-7 lg:w-[55rem] p-[7vw] "
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ y: -1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                    }}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </h3>

        <button 
            className="w-10 h-10 rounded-full bg-gradient-to-r from-black to-[#666666] text-white p-3 flex items-center justify-center mt-2"
            ref={buttonRef}
            onClick={() => router.push("/about")}
        >
            👋
        </button>
    </Wrapper>

    )
}

export default HeroSection
