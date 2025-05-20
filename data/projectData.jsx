import store from "../assets/store.svg";
import cms from "../assets/cms.svg";
import chazel from "../assets/chazel.svg"
import formers from "../assets/formers.svg"

import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import mail from "../assets/mail.png"

export const projectData = [
    {
      src: formers,
      title:"formers",
      cardWidth:"282px",
      cardHeight:"403px",
      bg:"bg-gradient-to-b from-[#595858] via-[#09090B] to-[#111113]",
      position:"top-10 right-0",
      deployedLink:"https://formers.vercel.app/",
      githubLink:""
    },
    {
      src: cms,
      title:"cms",
      cardWidth:"285px",
      cardHeight:"364px",
      bg:"bg-gradient-to-b from-[#BCE1FB] to-[#020817]",
      position:"top-10 right-0",
      deployedLink:"https://estore-admin-panel-orcin.vercel.app/"
    },
    {
      title:"Zone",
      cardWidth:"517px",
      cardHeight:"299px",
      bg:"bg-gradient-to-b from-[#D7CABE] to-[#847D77]",
      deployedLink:"",
    },
    {
      src: chazel ,
      title:"chazel",
      cardWidth:"222px",
      cardHeight:"324px",
      bg:"bg-gradient-to-b from-[#FFFFFF] to-[#585858]",
      position:"bottom-0 left-[1rem]",
      deployedLink:"",

    } , 
    {
      src:store ,
      title:"store",
      cardWidth:"285px",
      cardHeight:"364px",
      bg:"bg-gradient-to-b from-[#CBCDD4] to-[#595A5B]",
      position:"top-10 right-0",
      deployedLink:"https://store-orcin-iota.vercel.app/"
    } 
  ];


  export const socialData = [
    {
      source:"LinkedIn",
      logo:linkedin,
      link:"https://www.linkedin.com/in/yatiksri1103/",
    },
    {
      source:"Github",
      logo:github,
      link:"https://github.com/Yatik1/",
    },
    {
      source:"X",
      logo:twitter,
      link:"https://x.com/YatikSrivastava",
    },
    {
    source: "Mail",
    logo: mail,
    link: "mailto:yatiksrivastava1@gmail.com",
  },
  ]
  