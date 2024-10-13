import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

interface Experience {
    title: string,
    duration: string,
    description: string,
}


const experiences: Experience[] = [
    {
        title: "Sarkisova Care Website",
        duration: "January 2024 - August 2024",
        description: "I developed the frontend of the website using Next.js, TypeScript, and Tailwind CSS, ensuring a modern and responsive user experience. I took charge of UX and UI design, focusing on intuitive navigation and aesthetic appeal while conducting thorough testing to guarantee functionality and performance before launch. Additionally, I ensured compliance with HIPAA regulations and successfully managed the deployment process.",
    },
    {
        title: "Folio Fellowship - Glou Beauty",
        duration: "September 2023 - October 2023",
        description: "I developed an event tracking platform for Glou Beauty, designed to meticulously catalog various interactions occurring on the main marketplace website. These interactions range from routine clicks like 'Add to Bag' to specific engagements with individual products. The platform offers a comprehensive view of all recorded events, allowing users to effortlessly filter them by release or type. Additionally, users can delve deeper into any event by simply clicking on it, triggering a separate page to unveil detailed specifications.",
    },
    {
        title: "Buildspace",
        duration: "August 2023 - September 2023",
        description: "Over a six-week period, I collaborated with a colleague to design and develop tsk., an open-source productivity app. I actively pitched the app to hundreds of potential users, leveraging feedback to refine its features and market fit. Our efforts culminated in a successful launch, achieving strong initial adoption and positive user reception.",
    },
    {
        title: "Responsible AI Institute",
        duration: "June 2023 - July 2023",
        description: "We've enhanced the regulatory website for a non-profit organization dedicated to advancing human-centric and responsible artificial intelligence. The focus was on optimizing operational efficiency and user experience by refining data organization. This is done by writing code to sync the Firebase database to a Google Sheets file. The Google Sheets is then accessed by the regulatory website. Now, navigating the site is smoother and more intuitive, ensuring that visitors can easily access the valuable information they need to contribute to the ethical advancement of AI.",
    },
];

export default function Experience() {
  useEffect(() => {
    const experienceContainer = document.querySelector('.experience');
    const experienceItems = document.querySelectorAll('.experience-item');
    // const headerExperience = document.getElementsByClassName('header-experience');
    const headerTag = document.getElementsByClassName('header-tag');
    const headerBorder = document.getElementsByClassName('header-border');
    const yellowblob2 = document.getElementsByClassName('yellow-blob-2');
    const tealblob2 = document.getElementsByClassName('teal-blob-2');

    gsap.fromTo(yellowblob2, 
    {
        
        opacity: 0, // Start with 0 opacity
        yPercent: 50,
    },
    {
        scale: 1.2,
        xPercent: 70,
        opacity: 1, // Fade in to full opacity
        duration: 1, // Duration of the fade-in
        scrollTrigger: {
            trigger: experienceContainer,
            start: 'top 80%', // Start animation when the top of the element is 50% from the top of the viewport
            toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
    });

    gsap.fromTo(tealblob2,
    {
        opacity: 0, // Start with 0 opacity
        yPercent: 100,
    },
    {
        scale: 1.2,
        xPercent: -140,
        opacity: 1, // Fade in to full opacity
        duration: 1, // Duration of the fade-in
        scrollTrigger: {
            trigger: experienceContainer,
            start: 'top 80%', // Start animation when the top of the element is 50% from the top of the viewport
            toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
    });

    gsap.fromTo([headerBorder, headerTag],
    { 
        opacity: 0,
        width: '0%', // Start with 0% width
    },
    {
        opacity: 1,
        width: '70%', // Expand to full width
        duration: 1.3,
        scrollTrigger: {
            trigger: experienceContainer,
            start: 'top 70%', // Start animation when the top of the element is 80% from the top of the viewport
            toggleActions: 'play none none reverse', // Play on enter, reverse on leave
            once: true, // Only animate once
        },
    });



    gsap.fromTo(experienceItems, 
      { opacity: 0, y: 35 }, // Initial state
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: experienceContainer,
          start: 'top 70%', // Start animation when the top of the element is 80% from the top of the viewport
          toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="experience h-full py-28">
        <div className="blob-case">
          <Image className="yellow-blob-2" src="/yellow-bbblurry.svg" alt="yellow blob" width={700} height={700}/>
          <Image className="teal-blob-2" src="/teal-bbblurry.svg" alt="teal blob" width={700} height={700}/>
          {/* <Image className="green-blob" src="/green-bbblurry.svg" alt="green blob" width={700} height={700}/> */}
        </div>
        <div className='header-experience'>
            <h1 className="header-tag text-yellow text-center text-[1.2rem]">Experience</h1>
            <hr className='header-border border-lightyellow'/>
        </div>

        {
            experiences.map((x, i) => (
                <div 
                    key={i} 
                    className="experience-item text-yellow flex max-lg:flex-col justify-center items-center gap-5 max-w-[1000px] w-[85%] max-lg:w-[70%] max-md:w-[75%] max-sm:w-[85%] py-8 m-auto bg-slate-800 bg-opacity-40 rounded-lg my-5 transition ease-in-out duration-500"
                >
                    <h3 className="font-bold text-[1.5rem] text-green w-[20%] max-lg:w-[50%] max-lg:text-center">{x.title}</h3>
                    <div className="w-[60%]">
                        <p className="text-[0.9rem] text-blue max-lg:text-center">{x.duration}</p>
                        <p className="text-[0.95rem] pt-3">{x.description}</p>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}
