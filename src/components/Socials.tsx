import Link from "next/link"

export default function Socials() {
  return (
    <section className="socials fixed inset-x-0 bottom-0 px-8 m-auto py-4 flex justify-center items-center gap-8 w-fit bg-slate-900 bg-opacity-60 h-fit rounded-t-xl">
        <Link href="https://twitter.com/_ingriddsss" target="_blank"><img className="w-[35px]" src="/twitter.png" /></Link>
        <Link href="https://github.com/ingriddsss" target="_blank"><img className="w-[35px]" src="/github (1).png" /></Link>
        <Link href="https://www.linkedin.com/in/ingrid-de-silva-40660423a/" target="_blank"><img className="w-[35px]" src="/linkedin (1).png" /></Link>
        <Link href="mailto:ingriddesilva3@gmail.com" target="_blank"><img className="w-[35px]" src="/email.png" /></Link>
    </section>
  )
}