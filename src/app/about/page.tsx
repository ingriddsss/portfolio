import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Image from "next/image";

export default function About() {
  return (
    <div className="about flex justify-center items-center py-[5rem] pt-15 max-md:pt-[7rem] lg:pt-[10rem] h-screen overflow-y-auto">
        <div className="w-[50%] max-xl:w-[65%] max-lg:w-[80%] flex max-lg:flex-col justify-center items-center gap-12 max-sm:h-fit">
            <Image alt="memoji" className="w-[250px] max-md:w-[225px] max-sm:w-[175px] max-h-[844px]" src="/ingrid-memoji.png" width={800} height={800}></Image>
            <div className="max-sm:w-[95%] max-xl:w-[80%] max-lg:w-[85%]">
                <h3 className="text-lightyellow text-2xl font-bold max-md:text-center">I'm Ingrid and I'm based in Los Angeles!</h3>
                <p className="text-lightyellow text-[1.1rem] pt-3">I'm a passionate front-end engineer with a knack for translating stunning designs into clean, user-friendly code. Drawing from my background in graphic design and my certification as a UX designer, I infuse creativity and user-centric principles into every project. My forte lies in bringing websites and applications to life with a focus on creativity, responsiveness, and performance.</p>
            </div>
        </div>
    </div>
  );
}
