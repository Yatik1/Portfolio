import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Header from "@/components/ui/Header";


function App() {

  
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />

      <Header
        title="My Projects"
        textColor="text-[#d4d3d3] hover:text-stone-400"
      />

      <ProjectSection />
    </div>
  );
}

export default App;
