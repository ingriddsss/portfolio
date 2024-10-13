import Link from "next/link"

export default function Navbar() {
  return (
    // <section className="navbar fixed z-10 inset-x-0 top-0 pl-5 pr-12 m-auto py-0 flex justify-between items-center w-full md:w-[60%] bg-slate-900 bg-opacity-60 h-fit rounded-b-xl">
    <section className="navbar">      
      <Link href="/"><img src="/updated-port-logo.png" className="w-[20%] max-w-[130px] min-w-[120px]"/></Link>
      {/* <div className="flex justify-between gap-8">
        <Link href="/about" className="text-yellow font-bold">About</Link>
        <Link href="/experience" className="text-yellow font-bold">Experience</Link>
        <Link href="/projects" className="text-yellow font-bold">Projects</Link>
      </div> */}
    </section>
  )
}