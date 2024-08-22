"use client"

import Wrapper from "@/components/ui/Wrapper"
import { motion } from "framer-motion";
import github from "@/assets/githubIcon.png"
import linkedIn from "@/assets/linkedInIcon.png"
import mail from "@/assets/mailIcon.png"
import Image from "next/image";
import Link from "next/link";

function AboutSection() {

  const links = [
    {
      title : "Github" ,
      icon : github,
      ref: "https://github.com/Yatik1"
    } ,
    {
      title : "LinkedIn" ,
      icon : linkedIn,
      ref: "https://www.linkedin.com/in/yatik-srivastava-422ba927b/"
    } ,
    {
      title : "Gmail" ,
      icon : mail,
      ref: "mailto:yatiksrivastava1@gmail.com"
    } ,

  ]

  let content = `Hello , I am Yatik Srivastava, a Full-stack Developer from India, dedicated to crafting dynamic and responsive web applications. My expertise is rooted in frontend development with React.js and Next.js, complemented by backend skills in Node.js. I have a passion for continuously expanding my knowledge and staying updated with the latest technologies, ensuring that my work remains innovative and effective.`
  const words = content.split(" ")

  return (
    <div className="px-5 w-screen">
      <Wrapper styles="w-full h-fit md:h-[42vw] py-6">

          <h3 
            className="text-center text-sm md:text-[1.3rem] md:leading-6 tracking-tighter px-[6vw]"
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

          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
              duration: 1,
              delay: 0.5,
          }}
            className="flex item-center justify-center gap-2 md:gap-5 bg-white p-3 rounded-xl border border-[#dddd]"
          >
              {links.map((link , index) => (
                <Link 
                  key={index}
                  className="relative flex items-center justify-center p-2 w-5 h-5 md:w-7 md:h-7"
                  href={link.ref}
                >
                  <Image 
                    key={index}
                    src={link.icon}
                    alt={link.title}
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
              </Link>
              ))}
          </motion.div>

      </Wrapper>
    </div>
  )
}

export default AboutSection
