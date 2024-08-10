import Wrapper from "./ui/Wrapper"

function ProjectSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 w-full mb-3 px-5">
      
      <Wrapper styles="min-h-[268px] lg:min-h-[356px]">
        Hello
      </Wrapper>

      <Wrapper styles="min-h-[268px] lg:min-h-[356px]">
        World
      </Wrapper>

    </div>
  )
}

export default ProjectSection
