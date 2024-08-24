import Header from "./ui/Header"
import Marquee from "./ui/marquee"
import Wrapper from "./ui/Wrapper"


function SkillSection() {
    return (
        <div>
            <Header 
                title="Skills"
                textColor="text-[#d4d3d3] hover:text-stone-400"
            />

            <Wrapper styles="p-10">
                <div className="flex items-center justify-center bg-white px-5 py-2 rounded-lg border border-[#ddddd] overflow-hidden w-[55vw] md:w-[45vw]">
                    <Marquee /> 
                </div>
            </Wrapper>
        </div>
    )
}

export default SkillSection
