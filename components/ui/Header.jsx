"use client"

import { useRouter } from "next/navigation"

const Header = ({title , textColor}) => {

    const router = useRouter()

    function clickHandler() {
        router.push("/")
    }

  return (
    <div className="w-full p-7 flex items-center justify-center">
        <p onClick={clickHandler} className={`text-[0.95rem] font-semibold ${textColor} cursor-default`}>{title}</p>
    </div>
  )
}

export default Header