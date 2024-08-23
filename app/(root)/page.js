import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Header from "@/components/ui/Header";
import Wrapper from "@/components/ui/Wrapper";


function App() {

  
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <HeroSection />

      <Header
        title="My Projects"
        textColor="text-[#d4d3d3] hover:text-stone-400"
      />

      <ProjectSection />

      <Header 
        title="Contacts"
        textColor="text-[#d4d3d3] hover:text-stone-400"
      />

      <div className="px-5 w-full">
      <Wrapper styles="w-full p-10">
        <div className="flex item-center justify-center gap-3 md:gap-5 bg-white p-3 rounded-xl border border-[#dddd]">
          <ContactSection />
        </div>
      </Wrapper>
      </div>
    </div>
  );
}

export default App;
