import { useGSAP } from "@gsap/react";
import Navbar from "../Navbar"
import gsap from "gsap";

export default function Hero({onProjectsClick}) {

  useGSAP(() => {
    gsap.fromTo(".heroAnimate", {
      opacity:0,
      y:100,
    }, {
      opacity:1,
      duration:0.5,
      ease:"circ",
      y:0,
    })
  },[])


  return (
    <div className="flex h-screen flex-col justify-between heroAnimate">
      <section className='w-full h-[70%] bg-white relative overflow-hidden'>
        <Navbar onProjectsClick={onProjectsClick}  />
        <div className="flex flex-col gap-7 items-start justify-center h-full px-4 sm:px-8">
          <h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2.16rem] tracking-[-0.825px] w-3/4 md:w-[660px] leading-[1.5rem] sm:leading-[2.2rem] text-left">
            Focused on building clean & <span className='crimsonFont'>intuitive</span> interfaces, I craft <span className='crimsonFont'>visually</span> engaging full-stack experiences where design meets scalable engineering.
          </h1>

          <button className='w-fit px-[53px] py-[13px] bg-gradient-to-br from-black to-gray-700 hover:from-gray-700 hover:to-black text-white text-[1.2rem] font-semibold tracking-tight rounded-[10px] shadow-sm shadow-gray-400 cursor-none' onClick={() => window.location.href ="mailto:yatiksrivastava1@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Yatik!"}>
            Get in touch
          </button>
        </div>
      </section>

      <section className="w-full h-[30%] bggrid relative overflow-hidden">
        <div className="w-full h-full absolute bg-gradient-to-bl from-[49.56%] from-white to-none  flex items-center justify-start">
          <h2 className='pl-2 sm:pl-7 text-[6rem] sm:text-[8rem] tracking-tighter sm:tracking-normal text-black'>Projects</h2>
        </div>
      </section>
    </div>
  );
}