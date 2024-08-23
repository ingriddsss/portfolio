"use client"
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Image from "next/image";

interface Project {
  img: string;
  title: string;
  role: string;
  year: string;
  description: string;
  description2?: string; // Optional property
  description3?: string; // Optional property
  ss1: string;
  ss2: string;
  ss3: string;
  ss4?: string; // Optional property
  ss5?: string; // Optional property
}

interface ProjectProps {
  params: {
    id: keyof typeof data; // Ensure the id matches one of the keys in data
  };
}

const data: Record<string, Project> = { 
  tsk: { 
    img: "/tsk-text-logo.png",
    title: "tsk.", 
    role: "Front-end Developer",
    year: "2023",
    description: "Rashid Aziz and I built the frontend of a progressive web application using ReactJS, Vite, and Tailwind CSS, creating a seamless user experience. This open-source project was designed with a 'local-first' approach, ensuring offline accessibility and enhanced user privacy. Launched during buildspace, the platform quickly gained traction, with a growing community of daily active users benefiting from its innovative features.",
    description2: "Feel free to try the web application at www.tsk.lol!",
    ss1: "/tsk. ss.png",
    ss2: "/tsk. ss 2.png",
    ss3: "/tsk. ss 3.png",
  }, 
  booked: { 
    img: "/booked-full-cropped.png",
    title: "Booked", 
    role: "Front-end Developer",
    year: "2024",
    description: "A book logging app allows users to search for books they are reading and add them to their personal collection, helping them keep track of their literary journey. Within their collection, users can select a book and make as many notes as they wish, customizing their reading experience and reflections. The app ensures that all data is stored locally, providing both convenience and privacy for users to manage their book collection and notes securely.",
    ss1: "/booked-2.png",
    ss2: "/booked-3.png",
    ss3: "/booked-4.png",
  }, 
  // sarkisova_care_web: {
  //   img: "/hourglass.png",
  //   title: "Sarkisova Care Web",
  //   role: "Front-end Developer",
  //   year: "W.I.P.",
  //   description: "Currently crafting a website for a physician's private practice. ",
  //   description2: "Launching soon!",
  //   ss1: "/transparent-pic.png",
  //   ss2: "/transparent-pic.png",
  //   ss3: "/transparent-pic.png",
  //   ss4: "/transparent-pic.png",
  //   ss5: "/transparent-pic.png"
  // },
  // glou_beauty_event_tracking: {
  //   img: "/glou.jpg",
  //   title: "Glou Beauty Event Tracking",
  //   role: "Front-end Developer",
  //   year: "2023",
  //   description: "I developed an event tracking platform for Glou Beauty, designed to meticulously catalog various interactions occurring on the main marketplace website. These interactions range from routine clicks like 'Add to Bag' to specific engagements with individual products. The platform offers a comprehensive view of all recorded events, allowing users to effortlessly filter them by release or type. Additionally, users can delve deeper into any event by simply clicking on it, triggering a separate page to unveil detailed specifications.",
  //   ss1: "/glou-all-events.png",
  //   ss2: "/glou-types.png",
  //   ss3: "/glou-event-details.png",
  //   ss4: "/transparent-pic.png",
  //   ss5: "/transparent-pic.png"
  // },
  sarkisova_logo: {
    img: "/new-sarkisova-logo-1.png",
    title: "Sarkisova Logo",
    role: "Graphic Designer",
    year: "2024",
    description: "I designed a logo for a physician's private practice that is unlike any other, showcasing a unique blend of creativity and professionalism that captures the essence of the practice's mission and values.",
    ss2: "/logo with name and title .png",
    ss1: "/transparent-pic.png",
    ss3: "/transparent-pic.png",
    ss4: "/transparent-pic.png",
    ss5: "/transparent-pic.png"
  },
  // raii_data_optimization: {
  //   img: "/RAII logo.png",
  //   title: "Responsible AI Institute Data Optimization",
  //   role: "Software Engineer",
  //   year: "2023",
  //   description: "We've enhanced the regulatory website for a non-profit organization dedicated to advancing human-centric and responsible artificial intelligence. The focus was on optimizing operational efficiency and user experience by refining data organization. This is done by writing code to sync the Firebase database to a Google Sheets file. The Google Sheets is then accessed by the regulatory website. Now, navigating the site is smoother and more intuitive, ensuring that visitors can easily access the valuable information they need to contribute to the ethical advancement of AI.",
  //   description3: "*for confidentiality, there are no screenshots available for viewing*",
  //   ss1: "/transparent-pic.png",
  //   ss2: "/transparent-pic.png",
  //   ss3: "/transparent-pic.png",
  //   ss4: "/transparent-pic.png",
  //   ss5: "/transparent-pic.png"
  // },
  jammming: {
    img: "/jammming.png",
    title: "Jammming",
    role: "Front-end Developer",
    year: "2023",
    description: "Jammming is a simple web application that allows me to lookup any song/artist/album and add it to a fresh playlist. All of the songs that are added will be displayed to the side so that I can easily see what the playlist consists of. After selecting all the songs, I have the option to name the playlist and directly save it to my Spotify account. ",
    ss1: "/jammming1.png",
    ss2: "/jammming2.png",
    ss3: "/jammming3.png",
    ss4: "/transparent-pic.png",
    ss5: "/transparent-pic.png"
  },
  // sunnyside_landing: {
  //   img: "/sunnyside-logo.png",
  //   title: "Sunnyside Agency Landing",
  //   role: "Front-end Developer",
  //   year: "2022",
  //   description: "With this project, I was able to hone my front-end development skills and recreate a landing page for a mock company called Sunnyside Agency. ",
  //   ss1: "/sunnyside1.png",
  //   ss2: "/sunnyside2.png",
  //   ss3: "/sunnyside3.png",
  //   ss4: "/sunnyside4.png",
  //   ss5: "/sunnyside5.png",
  // },
  // fylo_landing: {
  //   img: "/fylo-logo.png",
  //   title: "Fylo Landing",
  //   role: "Front-end Developer",
  //   year: "2022",
  //   description: "Through this project, I cultivated and polished my front-end development skills while revamping a landing page for Sunnyside Agency, a fictitious company.",
  //   ss1: "/fylo1.png",
  //   ss2: "/fylo2.png",
  //   ss3: "/transparent-pic.png",
  //   ss4: "/transparent-pic.png",
  //   ss5: "/transparent-pic.png"
  // }
}

export default function Project({params} : ProjectProps) {

  // const project : any = data[params.id];

  const project: Project | undefined = data[params.id];

  if (!project) {
    return <div>Loading...</div>; // Handle the case where project is not found
  }

  return (
    <div className="project h-full flex flex-col justify-center items-center overflow-y-auto py-[8rem] max-lg:py-[8rem] max-md:[6rem]">
        <Image alt="project" className="w-[200px] max-md:w-[150px] max-lg:w-[175px]" src={project.img} width={200} height={200}/>
        <div className="bg-darkblue rounded-xl w-[40%] max-md:w-[70%] max-lg:w-[50%] px-10 py-5 my-10">
            <h3 className="title text-green text-center text-2xl font-bold pt-2">{project.title}</h3>
            <div className="py-1 flex justify-center items-center gap-3 font-bold">
                <p className="role text-blue text-lg max-sm:text-[1rem]">{project.role}</p>
                <p className="bullet text-blue text-3xl pb-1">•</p>
                <p className="year text-blue text-lg max-sm:text-[1rem]">{project.year}</p>
            </div>

            <p className="description text-lightyellow py-2">{project.description}</p>
            <p className="description text-lightyellow pt-2">{project.description2}</p>
            <p className="description text-center text-gray-500">{project.description3}</p>
        </div>
        {/* <hr className="bg-gray-900 bg-opacity-65 w-[60%]"/> */}
        <Image alt="" className="rounded-xl w-[50%] max-md:w-[65%] max-sm:w-[75%] py-10" src={project.ss1} width={1000} height={900}/>
        <Image alt="" className="rounded-xl w-[50%] max-md:w-[65%] max-sm:w-[75%] py-10" src={project.ss2} width={1000} height={900}/>
        <Image alt="" className="rounded-xl w-[50%] max-md:w-[65%] max-sm:w-[75%] py-10" src={project.ss3} width={1000} height={900}/>
        {/* <Image alt="screenshots" className="rounded-xl w-[50%] max-md:w-[65%] max-sm:w-[75%] py-10" src={project.ss4} width={1000} height={900} /> */}
        {/* <Image alt="screenshots" className="rounded-xl w-[50%] max-md:w-[65%] max-sm:w-[75%] py-10" src={project.ss5} /> */}
    </div>
  )
}