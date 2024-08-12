"use client";

import Wrapper from "@/components/ui/Wrapper";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Eye } from "lucide-react";
import { useEffect, useRef } from "react";

function HeroSection() {

    const buttonRef = useRef(null)

    let content = "Driven by the art of crafting elegant and intuitive user interfaces, transforming them into visually compelling web experiences that are both functionally robust & aesthetically pleasing.";
    const words = content.split(" ");

    const isMobile = window.innerWidth <= 768
    console.log(isMobile)

    if(!isMobile) {
        useEffect(() => {

            if(buttonRef.current) {
    
            function mouseEnter() {
                gsap.to(buttonRef.current , {
                    width: "7vw",
                    duration:0.5,
                    ease:"power4.out"
                })
            }
    
            function mouseLeave() {
                gsap.to(buttonRef.current , {
                    width: "auto",
                    duration:0.5,
                    ease:"power4.out"
                })
            }
    
                buttonRef.current.addEventListener("mouseenter" , mouseEnter)
                buttonRef.current.addEventListener("mouseleave" , mouseLeave)
            }
        } , [])
    
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
            className="w-fit rounded-full bg-black text-white p-3 flex items-center justify-center mt-2"
            ref={buttonRef}
        >
            <Eye className="w-fit"/>
        </button>
    </Wrapper>

    )
}

export default HeroSection
