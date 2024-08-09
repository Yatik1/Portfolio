"use client";

import Wrapper from "@/components/ui/Wrapper";
import { motion } from "framer-motion";

function App() {
  let content = "Driven by the art of crafting elegant and intuitive user interfaces, turning into visually compelling web experiences and builds seamless digital experiences both functional and aesthetically pleasing";
  
  const words = content.split(" ");

  return (
    <div className="flex flex-col items-center justify-center">
      <Wrapper styles="w-[82.5rem] h-[35rem] rounded-xl">
        <motion.h3 
          className="text-center text-[1.5rem] tracking-tight leading-8 w-[47rem]"
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
        </motion.h3>
      </Wrapper>
    </div>
  );
}

export default App;
