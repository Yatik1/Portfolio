"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import aws from "@/assets/aws.png"
import css from "@/assets/css.png"
import django from "@/assets/django.png"
import figma from "@/assets/figma.png"
import html from "@/assets/html.png"
import javascript from "@/assets/javascript.png"
import mongoDB from "@/assets/mongoDB.png"
import mysql from "@/assets/mysql.png"
import nextjs from "@/assets/nextjs.png"
import nodejs from "@/assets/nodejs.png"
import python from "@/assets/python.png"
import react from "@/assets/react.png"
import redux from "@/assets/redux.png"
import typescript from "@/assets/typescript.png"


function Marquee() {

    const skillsIcons = [html , css, javascript ,typescript , python, react , redux , nextjs , nodejs , django , mongoDB , mysql ,figma , aws]

    return (
        <motion.div
            initial={{ x: "40%" }}
            animate={{ x: "-40%" }}
            transition={{ repeat: Infinity, ease: "linear", duration:60 }}
            className="flex items-center justify-center gap-[0.4rem] md:gap-3"
        >
            {skillsIcons.map((icon , index) => (
                <div 
                  key={index}
                  className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
                >
                  <Image 
                    key={index}
                    src={icon}
                    alt="icon"
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  
              </div>
              ))}
            {skillsIcons.map((icon , index) => (
                <div 
                  key={index}
                  className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
                >
                  <Image 
                    key={index}
                    src={icon}
                    alt="icon"
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  
              </div>
              ))}
            {skillsIcons.map((icon , index) => (
                <div 
                  key={index}
                  className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
                >
                  <Image 
                    key={index}
                    src={icon}
                    alt="icon"
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  
              </div>
              ))}
            {skillsIcons.map((icon , index) => (
                <div 
                  key={index}
                  className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
                >
                  <Image 
                    key={index}
                    src={icon}
                    alt="icon"
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  
              </div>
              ))}

{skillsIcons.map((icon , index) => (
                <div 
                  key={index}
                  className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
                >
                  <Image 
                    key={index}
                    src={icon}
                    alt="icon"
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  
              </div>
              ))}

{skillsIcons.map((icon , index) => (
                <div 
                  key={index}
                  className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
                >
                  <Image 
                    key={index}
                    src={icon}
                    alt="icon"
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
                  
              </div>
              ))}
              
            
        </motion.div>
    )
}   

export default Marquee
