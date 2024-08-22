import store from "@/assets/storemockup.png";
import dashboard from "@/assets/dashboardmockup.png";
import cinemax from "@/assets/cinemaxmobilemockup.png"
import chazily from "@/assets/chazilymockup.png"
import blogbud from "@/assets/blogbudmockup.png"

export const projectData = [
    {
      id:1,
      src: dashboard,
      description: "Developed a unified system featuring a user dashboard for managing preferences, tracking orders, and customizing products, alongside a CMS for efficient content oversight and updates, ensuring accuracy and relevance.",
      title: "Dashboard & CMS",
      githubLink: "https://github.com/Yatik1/Ecommerce-admin-panel",
      deployedLink: "https://estore-admin-panel-orcin.vercel.app/",
      techs:["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Stripe"]
    },
    {
      id:2,
      src: store,
      title: "Store",
      description:"An online store designed to deliver a seamless shopping experience across all devices. The store is optimized for performance and usability, offering a responsive design that adapts to various screen sizes, ensuring an enjoyable and hassle-free shopping journey.",
      githubLink: "https://github.com/Yatik1/Nextjs-ecommerce",
      deployedLink: "https://store-orcin-iota.vercel.app/",
      techs:["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Stripe"]
    },
    {
      id:3,
      src: blogbud ,
      title : "Blog Bud",
      description: "A comprehensive platform for creating, publishing, and managing blogs, with tools for updating posts to ensure accuracy and relevance.",
      githubLink: "https://github.com/Yatik1/nextjs_blog",
      deployedLink: "https://blogbud.vercel.app/",
      techs:["Next.js", "TypeScript", "Tailwind", "MongoDB" , "mongoose"]

    } , 
    {
      id:4,
      src:cinemax ,
      title:"Cinemax",
      description:"A dynamic web application offering users comprehensive access to movie data, boosting application performance and reducing state management complexity by 40%.",
      githubLink: "https://github.com/Yatik1/stream-app",
      deployedLink: "https://cinemax-eight.vercel.app/",
      techs:["React", "Redux", "NodeJS" , "SASS"]
    } ,
    {
      id:5,
      src:chazily,
      title:"Chazily",
      description:"Developed a powerful real-time chat application to enhance user communication and interaction , integrated with Socket.io delivering a smooth and instantaneous messaging experience.",
      githubLink: "https://github.com/Yatik1/chat-app",
      deployedLink: "https://chazily.vercel.app/",
      techs:["React", "MongoDB", "NodeJS", "ExpressJS", "JWTs", "Socket.io", "Chakra UI"]
    }
  ];
  