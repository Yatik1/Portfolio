"use client"

import { useEffect, useState } from "react";
import ProjectSection from "../../components/ProjectSection"
import Header from "../../components/ui/Header";
import HeroSection from "../../components/HeroSection";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowContent(true);
    } else {
      setIsFirstVisit(true);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowContent(true);
              sessionStorage.setItem("hasVisited", "true");
            }, 300);
            return 100;
          }
          return Math.min(prev+2, 100);
        });
      }, 70);
    }
  }, []);

  if (!showContent && isFirstVisit) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black flex-col transition-opacity duration-1000 ease-in-out">
        <p className="text-sm font-mono text-white mb-4 pixelFont animate-pulse">Loading..</p>
        <div className="relative w-72 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-white transition-all duration-[400ms] ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mb-4 bg-[#FCFDF6] animate-fadeInZoom">
      <Header />
      <HeroSection />
      <ProjectSection />
    </div>
  );
}
