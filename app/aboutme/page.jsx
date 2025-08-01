"use client";
import React, { useRef, useState } from 'react';
import profile from "../favicon.ico";
import Image from 'next/image';
import { ArrowLeft, Ellipsis } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { socialData } from '../../data/projectData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Page() {
  const [open, setOpen] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [intBox, setIntBox] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const introRef = useRef(null);
  const homeRef = useRef(null)

  const router = useRouter()


  useGSAP(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container) return;

    if (open) {
      setTextVisible(false);
      container.style.display = 'flex';

      gsap.fromTo(
        container,
        { width: '0rem', opacity: 0 },
        {
          width: '10rem',
          opacity: 1,
          duration: 0.5,
          ease: 'power4.out',
          onUpdate: () => {
            const currentWidth = parseFloat(window.getComputedStyle(container).width);
            if (currentWidth > 60 && !textVisible) {
              setTextVisible(true);
            }
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.3,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    }

    if (intBox) {
  setIntroVisible(false);
  const targetWidth =
    window.innerWidth < 768 ? Math.min(window.innerWidth * 0.9, 400) : 400; 
  gsap.fromTo(
    introRef.current,
    { x: 30, width: 0, opacity: 0, height: 0 },
    {
      x: 0,
      width: targetWidth,
      height: "auto",
      opacity: 1,
      duration: 0.6,
      delay: 0.1,
      ease: "power4.out",
      onComplete: () => setIntroVisible(true),
    }
  );
}
  }, [open, intBox]);

  const handleIntroClose = () => {
    if (!introRef.current) return;

    gsap.to(introRef.current, {
      x: 20,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.inOut',
      onComplete: () => {
        setIntroVisible(false);
        setIntBox(false);
      },
    });
  };

  const handleClick = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (open) {
      gsap.to(text, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setTextVisible(false),
      });

      gsap.to(container, {
        width: '0rem',
        opacity: 0,
        duration: 0.4,
        ease: 'power4.in',
        onComplete: () => {
          container.style.display = 'none';
        },
      });

      setTimeout(() => {
        setOpen(false);
      }, 400);
    } else {
      setOpen(true);
    }
  };

  function homemouseEnter() {
    gsap.to(homeRef.current, {
      width: "60px",
      duration:0.67,
      ease:"power4.out"

    })
  }

  function homemouseLeave() {
    gsap.to(homeRef.current, {
      width: "32px",
      duration:0.5,
      ease:"power4.out"
    })
  }

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center relative cursor-auto">
      <div 
        ref={homeRef} 
        className="w-8 h-8 bg-gradient-to-tr from-black to-[#666666] text-stone-300 absolute top-5 left-1/2 tranform -translate-x-1/2 rounded-full flex items-center justify-center cursor-pointer" 
        onMouseEnter={homemouseEnter}
        onMouseLeave={homemouseLeave}
        onClick={() => router.push("/")}
      >
          <ArrowLeft size={15} />
      </div>
      <div className="relative w-fit bg-black rounded-full flex items-center justify-start p-2 gap-1">
        <div
          className="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <Image src={profile} alt="profile" className="w-full h-full object-cover" />
        </div>

        {!open && (
          <div
            className="flex items-center justify-center w-10 h-10 overflow-hidden bg-green-500 rounded-full text-white cursor-pointer"
            onClick={() => setIntBox(true)}
          >
            <Ellipsis size={20} />
          </div>
        )}

        <div
          ref={containerRef}
          style={{ display: 'none', overflow: 'hidden' }}
          className="flex flex-col justify-center text-white"
        >
          {textVisible && (
            <div ref={textRef} className="px-2">
              <p className="text-xs text-gray-400">Hello, I am</p>
              <p className="text-[0.8rem]">Yatik</p>
            </div>
          )}
        </div>
      </div>

      {intBox && (
        <div
          ref={introRef}
          className="absolute bg-black rounded-[1rem] text-xs p-3 overflow-hidden w-[17rem] md:w-[25rem]"
        >
          <div
            className="w-fit flex items-center justify-center text-white cursor-pointer mb-1"
            onClick={handleIntroClose}
          >
            <ArrowLeft size={18} />
          </div>
          <div className="flex items-center justify-center p-2">
            {introVisible && (
              <>
                <div className="text-xs md:text-sm text-gray-500 text-balance tracking-tight">
                I’m at the beginning of my journey as a {" "}
                <a href='https://www.linkedin.com/in/yatiksri1103/' target="_blank" className="font-semibold text-white underline"> software developer</a> 
                , driven by curiosity, creativity and a desire to build meaningful digital experiences. 
                I believe in <span className="font-semibold text-white">solving problems </span>
                with intention — not just writing code, but thinking critically about what
                I’m <span className="font-semibold text-white">building</span> and why. 
                To me, clean code and thoughtful design go hand in hand.


                <div className="flex items-center justify-between w-full mt-3">
                  <div className='w-full flex items-center justify-start gap-2'>
                    {socialData.map((social, index) => (
                      <Link key={index} href={social.link} target='_blank' className='flex items-center justify-center'>
                       <Image src={social.logo} alt={social.source} className='w-[16px] h-[16px]' />
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center justify-end bg-white px-3 py-1 rounded-full">
                    <Link 
                      href="https://drive.google.com/file/d/1lS2UsYPzf_PiW0USZKOZ-iZLaHZzFBEg/view?usp=sharing"
                      target='_blank' 
                      className='text-xs text-black font-semibold'
                    >
                      Resume
                    </Link>
                  </div>
                </div>

              </div>
              </>
            )}
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Page;
