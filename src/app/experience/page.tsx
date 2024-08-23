import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

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
  return (
    <div className="experience h-full py-28">
        <h1 className=""></h1>
        {
            experiences.map((x, i) => (
                <div key={i} className="text-yellow flex max-lg:flex-col justify-center items-center gap-5 max-w-[1000px] w-[65%] max-lg:w-[70%] max-md:w-[75%] max-sm:w-[85%] py-8 m-auto hover:bg-slate-800 hover:bg-opacity-50 rounded-lg my-5 transition ease-in-out duration-500">
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