"use client"

import Wrapper from "@/components/ui/Wrapper"
import { motion } from "framer-motion";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";

function AboutSection() {

  let content = `Hello , I am Yatik Srivastava, a Full-stack Developer from India, dedicated to crafting dynamic and responsive web applications. My expertise is rooted in frontend development , complemented by robust backend skills. I have a passion for continuously expanding my knowledge and staying updated with the latest technologies, ensuring that my work remains innovative and effective.`
  const words = content.split(" ")

  return (
    <div className="px-5 mb-9">
      <Wrapper styles="relative w-full h-[150vw] md:h-screen py-6 overflow-hidden">

          <h3 
            className="text-center text-[0.9rem] md:text-[1.3rem] md:leading-6 tracking-tighter px-[6vw]"
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
            className="flex item-center justify-center gap-3 md:gap-5 bg-white p-3 rounded-xl border border-[#dddd]"
          >
              <ContactSection />
          </motion.div>
      </Wrapper>

      <SkillSection />

    </div>
  )
}

export default AboutSection
