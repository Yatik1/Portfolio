import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar({onProjectsClick}) {

  const router = useRouter()

  return (
    <nav className='w-full flex items-center justify-center sm:justify-between gap-3 sm:gap-0 sm:px-8 py-4 tracking-tight'>
          <section className='flex flex-col items-start justify-center md:gap-1 pt-3 sm:pt-0 w-full' onClick={() => router.push("/aboutme") }>
            <p className="text-xs sm:text-[16px] font-semibold">Yatik Srivastava</p>
            <p className=" text-[0.5rem] sm:text-[14px] text-gray-500">Software Developer</p>
          </section>

          <section className='flex items-start justify-center gap-2 sm:gap-3 text-xs sm:text-[14px]'>
            <div className="flex items-center justify-center gap-3">
              <p onClick={() => window.open("https://drive.google.com/file/d/1bMsRk6WBOuJqUfSlDebbO1GbMF1-i_bb/view?usp=sharing", "_blank")}>Resume</p>
              <p onClick={onProjectsClick}>Projects</p>
            </div>
        
            <div className="text-center sm:underline">
              <ul className='flex sm:flex-col gap-3 sm:gap-0'>
                <li><Link href="https://www.linkedin.com/in/yatiksri1103/" target='_blank'>LinkedIn</Link></li>
                <li><Link href="https://x.com/YatikSrivastava" target='_blank'>Twitter</Link></li>
                <li><Link href="https://github.com/Yatik1/" target='_blank'>Github</Link></li>
              </ul>
            </div>
         </section>
    </nav>
  )
}

export default Navbar