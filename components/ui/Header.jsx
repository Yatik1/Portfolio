"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowRight, X } from "lucide-react"
import { useRouter } from "next/navigation"

const Header = () => {
    const router = useRouter()
    const toggleRef1 = useRef(null)
    const toggleRef2 = useRef(null)

    const isMobile = useRef(false)
    const [open, setOpen] = useState(false)

    useGSAP(() => {
        if (typeof window !== "undefined") {
            isMobile.current = window.innerWidth <= 768;
            const handleResize = () => {
                isMobile.current = window.innerWidth <= 768;
            };
            window.addEventListener('resize', handleResize);

            let mouseEnter, mouseLeave;

            if (!isMobile.current && toggleRef1.current) {
              mouseEnter = () => {
                gsap.to(toggleRef1.current, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: "power4.out"
                });
            };

            mouseLeave = () => {
                gsap.to(toggleRef1.current, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power4.out"
                });
            };
                toggleRef1.current.addEventListener("mouseenter", mouseEnter);
                toggleRef1.current.addEventListener("mouseleave", mouseLeave);
            }

            if (open && toggleRef2.current) {
                gsap.fromTo(toggleRef2.current,
                    { width: 0, opacity: 0, x: -10 },
                    {
                        width: "auto",
                        opacity: 1,
                        x: 0,
                        duration: 0.3,
                        ease: "power3.out",
                    });
            }

            if (!open && toggleRef2.current) {
                gsap.to(toggleRef2.current, {
                    width: 0,
                    opacity: 0,
                    x: -10,
                    duration: 0.25,
                    ease: "power2.in"
                });
            }

            return () => {
                window.removeEventListener('resize', handleResize);
                if (toggleRef1.current) {
                    toggleRef1.current.removeEventListener("mouseenter", mouseEnter);
                    toggleRef1.current.removeEventListener("mouseleave", mouseLeave);
                }
            };
        }
    }, [open]);

    return open ? (
        <div
            ref={toggleRef2}
            className="m-7 bg-gradient-to-r from-black to-[#666666] p-2 rounded-full flex flex-1 items-center justify-center gap-1 overflow-hidden cursor-pointer"
        >
            <div className="flex items-end justify-center">
                <div
                    className="bg-gradient-to-br from-orange-600 to-orange-400 rounded-full w-5 h-5 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <X className="text-white text-animate" width={12} height={12} />
                </div>
            </div>
            <div className="flex items-end justify-center">
                <div
                    className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-full w-5 h-5 flex items-center justify-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        router.push("/about");
                    }}
                >
                    <ArrowRight className="text-white text-animate" width={12} height={12} />
                </div>
            </div>
        </div>
    ) : (
        <div
            ref={toggleRef1}
            onClick={() => setOpen(true)}
            className="m-7 bg-gradient-to-r from-black to-[#666666] w-fit px-5 py-[0.35rem] rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
        >
            <div className="relative bg-blue-500 w-[0.7rem] h-[0.7rem] rounded-full flex items-center justify-center">
                <div className="absolute bg-blue-300/50 w-4 h-4 rounded-full animate-ping"/>
            </div>
            <p className="text-[0.75rem] text-gray-100">Yatik Srivastava</p>
        </div>
    )
}

export default Header
