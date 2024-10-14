import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiArrowUpRightBold } from "react-icons/pi";
import { isAbsolute } from "path";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin
// import Navbar from "@/components/Navbar"
// import Socials from "@/components/Socials"

export default function Projects() {
    useEffect(() => {
        const projectsContainer = document.querySelector('.projects');
        const projectHeaderTag = document.getElementsByClassName('project-header-tag');
        const projectHeaderBorder = document.getElementsByClassName('project-header-border');
        const greenblob2 = document.getElementsByClassName('green-blob-2');

        // gsap.to(greenblob2, 
        //   {
        //     xPercent: 135,
        //     yPercent: 0,
        //     scrollTrigger: {
        //       trigger: greenblob2, // The element to trigger the animation
        //       start: 'top 80%', // Start animation when the top of the element is 80% from the top of the viewport
        //       toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        //       once: true, // Only animate once
        //     },
        //   }
        // );


        gsap.fromTo([projectHeaderBorder, projectHeaderTag],
        { 
            opacity: 0,
            width: '0%', // Start with 0% width
        },
        {
            opacity: 1,
            width: '50%', // Expand to full width
            duration: 1.3,
            scrollTrigger: {
                trigger: projectsContainer,
                start: 'top 70%', // Start animation when the top of the element is 80% from the top of the viewport
                toggleActions: 'play none none reverse', // Play on enter, reverse on leave
                once: true, // Only animate once
            },
        });
    
    
    
        // gsap.fromTo(experienceItems, 
        //   { opacity: 0, y: 35 }, // Initial state
        //   {
        //     opacity: 1,
        //     y: 0,
        //     stagger: 0.3, // Stagger the animation by 0.2 seconds
        //     scrollTrigger: {
        //       trigger: experienceContainer,
        //       start: 'top 70%', // Start animation when the top of the element is 80% from the top of the viewport
        //       toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        //     },
        //   }
        // );
    
        return () => {
          // Clean up ScrollTrigger instances on unmount
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);


  return (
    <div className="projects h-screen flex flex-col justify-center items-center pt-28 max-md:pt-[14rem] max-lg:pt-[15rem] max-2xl:pt-[17rem] xl:pt-[18rem] pb-15 font-bricolagegrotesque">
        <div className="blob-case flex justify-center overflow-visible">
          <Image className="green-blob-2 absolute left-[65%]" src="/green-bbblurry.svg" alt="green blob" width={700} height={700}/>
        </div>
        <div className="h-screen">

        {/* <h1 className="text-yellow font-bold text-center text-2xl">Check out the projects that I've worked on!</h1> */}
        <div className='header-projects'>
            <h1 className="project-header-tag font-ahganirya text-yellow text-center text-[1.2rem] m-auto">My Projects</h1>
            <hr className='project-header-border border-lightyellow m-auto'/>
        </div>

        <section className="w-[80%] py-5 max-md:py-10 max-lg:py-18 max-sm:w-[85%] m-auto">
        {/* <div className="container grid gap-y-20 gap-x-16 px-4 py-10 md:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"> */}
        <div className="container flex flex-col gap-y-20 gap-x-16 px-4 py-10 md:px-6">
        
          
          <div className="project flex flex-col justify-center items-center relative group overflow-visible rounded-lg px-5 py-[-2rem]">
            <Link className="absolute inset-0 z-10" href="/projects/booked">
              <span className="sr-only">View Project</span>
            </Link>
            {/* <Image
              alt="booked"
              className="object-cover max-w-[400px] w-[50%] m-auto h-60"
              height={300}
              src="/booked-full-cropped.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            /> */}
            <h3 className="project-name font-ahganirya flex justify-center items-end gap-2 text-yellow text-xl hover:cursor-pointer">
                Booked 
                <PiArrowUpRightBold className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <div className="project-description p-4 bg-slate-900 rounded-lg w-[50%]">
              {/* <h3 className="font-semibold text-lg text-green md:text-xl">Booked</h3> */}
              <p className="project-text text-sm text-lightyellow">A book logging app allows users to search for boots they are reading and add them to their personal collection. Within their collection, users can select a book and make as many notes as they wish. All data is stored locally for convenience and privacy.</p>
            </div>
          </div>
          {/* <hr className='border-lightyellow m-auto w-[50%]'/> */}

          
          <div className="project flex flex-col justify-center items-center relative group overflow-hidden rounded-lg px-5">
            <Link className="absolute inset-0 z-10" href="/projects/tsk">
              <span className="sr-only">View Project</span>
            </Link>
            {/* <Image
              alt="tsk."
              className="object-cover max-w-[200px] w-[50%] m-auto h-60"
              height={300}
              src="/tsk-text-logo.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            /> */}
            {/* <h3 className="project-name text-yellow text-xl">tsk.</h3> */}
            <h3 className="project-name font-ahganirya flex justify-center items-end gap-2 text-yellow text-xl hover:cursor-pointer">
                tsk. 
                <PiArrowUpRightBold className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <div className="project-description p-4 bg-slate-900 rounded-lg w-[50%]">
              {/* <h3 className="font-semibold text-lg text-green md:text-xl">tsk.</h3> */}
              <p className="text-sm text-lightyellow">A progressive web app with ReactJS, Vite, and Tailwind CSS, emphasizing offline accessibility, privacy, and innovative features, gaining traction with a growing community of daily users.</p>
            </div>
          </div>

          {/* <hr className='border-lightyellow m-auto w-[50%]'/> */}
            

          {/* <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/sarkisova_care_web">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
              alt="Sarkisova Care Web"
              className="object-cover w-full h-60"
              height={300}
              src="/hourglass.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "none",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">Sarkisova Care Web</h3>
              <p className="text-sm text-lightyellow">Currently crafting a website for a physician's private practice.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/glou_beauty_event_tracking">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
              alt="Glou Beauty Event Tracking Web"
              className="object-cover w-full h-60"
              height={300}
              src="/glou.jpg"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">Glou Beauty Event Tracking</h3>
              <p className="text-sm text-lightyellow">
I developed a comprehensive event tracking platform for Glou Beauty, cataloging various interactions on the main marketplace website, enabling users to effortlessly filter and analyze events, with detailed specifications accessible through a single click.</p>
            </div>
          </div> */}
          
          
          
          <div className="project flex flex-col justify-center items-center relative group overflow-visible rounded-lg px-5">
            <Link className="absolute inset-0 z-10" href="/projects/sarkisova_logo">
              <span className="sr-only">View Project</span>
            </Link>
            {/* <Image
              alt="Sarkisova Logo"
              className="object-cover w-[50%] max-w-[250px] m-auto h-60"
              height={300}
              src="/new-sarkisova-logo-1.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            /> */}
            {/* <h3 className="project-name text-yellow text-xl">Sarkisova Logo</h3> */}
            <h3 className="project-name font-ahganirya flex justify-center items-end gap-2 text-yellow text-xl hover:cursor-pointer">
                Sarkisova Logo 
                <PiArrowUpRightBold className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <div className="project-description p-4 bg-slate-900 rounded-lg w-[50%]">
              {/* <h3 className="font-semibold text-lg text-green md:text-xl">Sarkisova Logo</h3> */}
              <p className="text-sm text-lightyellow">I crafted a distinctive logo for a physician's practice, balancing creativity and professionalism to reflect their mission and values.</p>
            </div>
          </div>
            
          {/* <hr className='border-lightyellow m-auto w-[50%]'/> */}


          {/* <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/raii_data_optimization">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
              alt="RAII Data Optimization"
              className="object-cover w-full h-60"
              height={300}
              src="/RAII logo.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">RAII Data Optimization</h3>
              <p className="text-sm text-lightyellow">We optimized a regulatory website for a non-profit AI organization, streamlining data organization and enhancing user experience by syncing Firebase database with Google Sheets for smoother navigation and intuitive access to valuable information.</p>
            </div>
          </div> */}



          <div className="project flex flex-col justify-center items-center relative group overflow-visible rounded-lg px-5">
            <Link className="absolute inset-0 z-10" href="/projects/jammming">
              <span className="sr-only">View Project</span>
            </Link>
            {/* <Image
              alt="Jammming"
              className="object-cover w-[50%] max-w-[400px] h-auto"
              height={300}
              src="/jammming.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            /> */}
            {/* <h3 className="project-name text-yellow text-xl">Jammming</h3> */}
            <h3 className="project-name font-ahganirya flex justify-center items-end gap-2 text-yellow text-xl hover:cursor-pointer">
                Jammming 
                <PiArrowUpRightBold className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <div className="project-description p-4 bg-slate-900 rounded-lg w-[50%]">
              {/* <h3 className="font-semibold text-lg text-green md:text-xl">Jammming</h3> */}
              <p className="text-sm text-lightyellow">Jammming is a user-friendly web app enabling song lookup, playlist creation, and direct saving to Spotify accounts.</p>
            </div>
          </div>



          {/* <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/sunnyside_landing">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
              alt="Sunnyside Agency Landing"
              className="object-cover w-full h-60"
              height={300}
              src="/sunnyside-logo.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">Sunnyside Agency Landing</h3>
              <p className="text-sm text-lightyellow">A landing page for a mock business, Sunnyside Agency.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/fylo_landing">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
              alt="Fylo Landing"
              className="object-cover w-[55%] m-auto h-60"
              height={300}
              src="/fylo-logo.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">Fylo Landing</h3>
              <p className="text-sm text-lightyellow">A landing page for a mock business, Fylo.</p>
            </div>
          </div> */}
        </div>
      </section>
        </div>
    </div>
  )
}
