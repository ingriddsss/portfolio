import Image from "next/image";

export default function Home() {
  return (
    <div className="home h-screen flex flex-col justify-center items-center font-bricolagegrotesque">
      <Image alt="memoji" className="w-[240px] max-w-[350px]" src="/ingrid-memoji.png" width={200} height={200}></Image> 
      <div className="text-center p-8">
        <h2 className="font-bold text-yellow text-3xl">Hello, I'm Ingrid De Silva!</h2> 
        <h3 className="text-yellow text-xl pt-2">Design + Front-end Developer</h3>
      </div>
    </div>
  );
}
