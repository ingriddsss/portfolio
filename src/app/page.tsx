"use client"

import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Image from "next/image";

import { useEffect } from "react";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const yellowblob = document.getElementsByClassName('yellow-blob');
    const tealblob = document.getElementsByClassName('teal-blob');
    const greenblob = document.getElementsByClassName('green-blob');
    const about = document.getElementsByClassName('about');

    gsap.fromTo(yellowblob,
      {
        xPercent: 95,
        yPercent: -20,
      },
      {
        xPercent: 45,
        yPercent: 100,
        scale: 1.3,
        scrollTrigger: {
          trigger: ".blob-case",
          start: "top top",
          end: "bottom+=100vh top", // Adjusted to keep the yellow blob visible
          scrub: true,
        }
      });

    gsap.fromTo(tealblob,
    {
      xPercent: 20,
      yPercent: 10,
    },
    {
      xPercent: 70,
      yPercent: 160,
      scale: 1.3,
      scrollTrigger: {
        trigger: ".blob-case",
        start: "top top",
        end: "bottom+=100vh top", // Adjusted to keep the yellow blob visible
        scrub: true,
      }
    });

    gsap.fromTo(greenblob,
      {
        xPercent: -120,
        yPercent: 15,
      },
      {
        xPercent: -180,
        yPercent: 180,
        scale: 1.3,
        scrollTrigger: {
          trigger: ".blob-case",
          start: "top top",
          end: "bottom+=100vh top", // Adjusted to keep the yellow blob visible
          scrub: true,
        }
      });
    
    gsap.fromTo(about, 
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "top+=100px top",
          scrub: true,
        }
      })
  }, [])


  return (
    <div className="flex flex-col justify-center items-center">
    {/* <div className=""> */}
      <div className="home">
        <div className="blob-case">
          <Image className="yellow-blob" src="/yellow-bbblurry.svg" alt="yellow blob" width={700} height={700}/>
          <Image className="teal-blob" src="/teal-bbblurry.svg" alt="teal blob" width={700} height={700}/>
          <Image className="green-blob" src="/green-bbblurry.svg" alt="green blob" width={700} height={700}/>
        </div>
      
      <div className="hero-info">
        {/* <Image alt="memoji" className="w-[240px] max-w-[350px]" src="/ingrid-memoji.png" width={200} height={200}></Image>  */}
        <div className="text-center p-8">
          {/* <h2 className="font-semibold text-yellow text-3xl">Hello, I'm Ingrid De Silva!</h2>  */}
          <h2 className="name font-semibold text-yellow text-3xl">Ingrid D.S.</h2> 
          <h3 className="text-yellow text-xl pt-2">Design + Front-end Developer</h3>
          </div>
        </div>
      </div>
      
      
      <div className="about w-[50%] max-xl:w-[65%] max-lg:w-[80%] flex max-lg:flex-col justify-center items-center gap-12 max-sm:h-fit">
        <Image alt="memoji" className="w-[250px] max-md:w-[225px] max-sm:w-[175px] max-h-[844px]" src="/ingrid-memoji.png" width={800} height={800}></Image>
        <div className="max-sm:w-[95%] max-xl:w-[80%] max-lg:w-[85%]">
            <h3 className="text-lightyellow text-2xl font-bold max-md:text-center">I'm Ingrid and I'm based in Los Angeles!</h3>
            <p className="text-lightyellow text-[1.1rem] pt-3">I'm a passionate front-end engineer with a knack for translating stunning designs into clean, user-friendly code. Drawing from my background in graphic design and my certification as a UX designer, I infuse creativity and user-centric principles into every project. My forte lies in bringing websites and applications to life with a focus on creativity, responsiveness, and performance.</p>
        </div>
      </div>

      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
