"use client";

import Wrapper from "@/components/ui/Wrapper";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function HeroSection() {

    const buttonRef = useRef(null)

    let content = "Driven by the art of crafting elegant and intuitive user interfaces, transforming them into visually compelling web experiences that are both functionally robust & aesthetically pleasing.";
    const words = content.split(" ");

    const isMobile = window.innerWidth <= 768

    if(!isMobile) {
        useEffect(() => {

            if(buttonRef.current) {
    
            function mouseEnter() {
                gsap.to(buttonRef.current , {
                    width: "6rem",
                    duration:0.5,
                    ease:"power4.out"
                })
            }
    
            function mouseLeave() {
                gsap.to(buttonRef.current , {
                    width: "2.5rem",
                    duration:0.5,
                    ease:"power4.out"
                })
            }
    
                buttonRef.current.addEventListener("mouseenter" , mouseEnter)
                buttonRef.current.addEventListener("mouseleave" , mouseLeave)
            }
        } , [isMobile])
    
    }

    return (
        <Wrapper styles="w-[90vw] md:w-[95vw] h-[90vw] md:h-[42vw]">
        
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
            className="w-10 h-10 rounded-full bg-black text-white p-3 flex items-center justify-center mt-2"
            ref={buttonRef}
        >
            👁‍🗨
        </button>
    </Wrapper>

    )
}

export default HeroSection
