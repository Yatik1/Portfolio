import github from "@/assets/githubIcon.png"
import linkedIn from "@/assets/linkedInIcon.png"
import mail from "@/assets/mailIcon.png"
import resume from "@/assets/resumeIcon.png"
import Image from "next/image";
import Link from "next/link";

function ContactSection() {

    const links = [
        {
          title : "Github" ,
          icon : github,
          ref: "https://github.com/Yatik1"
        } ,
        {
          title : "LinkedIn" ,
          icon : linkedIn,
          ref: "https://www.linkedin.com/in/yatik-srivastava-422ba927b/"
        } ,
        {
          title : "Gmail" ,
          icon : mail,
          ref: "mailto:yatiksrivastava1@gmail.com"
        } ,
        {
          title: "Resume" ,
          icon : resume,
          ref:"https://drive.google.com/file/d/1CSkcnBtw3WW17gU9jZJ2nz4Cb6h1Du4U/view?usp=drivesdk"
        }
    
      ]

  return (
    <>
      {links.map((link , index) => (
                <Link 
                  key={index}
                  className="relative flex items-center justify-center p-2 w-7 h-7"
                  href={link.ref}
                >
                  <Image 
                    key={index}
                    src={link.icon}
                    alt={link.title}
                    className="absolute w-full h-full"
                    layout="fill"
                    objectFit="cover"
                  />
              </Link>
              ))}
    </>
  )
}

export default ContactSection
