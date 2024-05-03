import Image from "next/image";

export default function About() {
  return (
    <div className="about h-screen flex justify-center items-center py-[5rem] overflow-y-auto">
        <div className="w-[40%] max-xl:w-[60%] flex max-lg:flex-col justify-center items-center gap-12">
            <Image alt="memoji" className="w-[250px] max-md:w-[225px] max-h-[844px]" src="/ingrid-memoji.png" width={200} height={200}></Image>
            <div className="">
                <h3 className="text-lightyellow text-2xl font-bold max-md:text-center">I'm Ingrid and I'm based in Los Angeles!</h3>
                <p className="text-lightyellow text-[1.1rem] pt-3">I'm a passionate front-end engineer with a knack for translating stunning designs into clean, user-friendly code. Drawing from my background in graphic design and my certification as a UX designer, I infuse creativity and user-centric principles into every project. My forte lies in bringing websites and applications to life with a focus on creativity, responsiveness, and performance.</p>
            </div>
        </div>
    </div>
  );
}
