"use client"

import { useRouter } from "next/navigation"

const Navbar = () => {

    const router = useRouter()

    function clickHandler() {
        router.push("/")
    }

  return (
    <div className="w-full p-7 flex items-center justify-center">
        <p onClick={clickHandler} className="text-[0.95rem] font-semibold text-[#DFDFDF] hover:text-stone-300 cursor-default">Yatik Srivastava</p>
    </div>
  )
}

export default Navbar