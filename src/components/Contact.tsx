import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    useEffect(() => {
        const yellowblob3 = document.getElementsByClassName('yellow-blob-3');
        const blobContainer = document.getElementsByClassName('blob-case-contact')

        // gsap.fromTo(yellowblob3, 
        // {
        //   xPercent: -90,
        // //   yPercent:  -50,
        //   scale: 1.5, 
        // },
        // {   
        //     scale: 1.5,
        //     scrollTrigger: {
        //         trigger: blobContainer,
        //         start: 'top 70%', // Start animation when the top of the element is 80% from the top of the viewport
        //         toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        //         once: true, // Only animate once
        //     },  
        // })
    }, [])

    return (
        <section className="relative contact w-screen mt-52 max-md:mt-84">
            <div className="contact-info mt-[10rem] mb-48 py-8 px-16 rounded-lg bg-gray-600 bg-opacity-25 transition-transform duration-300 hover:scale-110 shadow-lg shadow-gray-800 hover:shadow-gray-700">
                <p className="text-[1.5rem] text-yellow text-center">Let's connect!</p>
                <div className="socials flex justify-center items-center gap-5 py-5">
                    <Link href="https://twitter.com/_ingriddsss" target="_blank"><img className="w-[35px]" src="/twitter.png" /></Link>
                    <Link href="https://github.com/ingriddsss" target="_blank"><img className="w-[35px]" src="/github (1).png" /></Link>
                    <Link href="https://www.linkedin.com/in/ingrid-de-silva-40660423a/" target="_blank"><img className="w-[35px]" src="/linkedin (1).png" /></Link>
                    <Link href="mailto:ingriddesilva3@gmail.com" target="_blank"><img className="w-[35px]" src="/email.png" /></Link>
                </div>
            </div>
            {/* <div className="blob-case-contact">
                <Image className="yellow-blob-3" src="/yellow-bbblurry.svg" alt="yellow blob" width={700} height={700}/>
            </div> */}
        </section>
    )
}