import Link from "next/link"

export default function Projects() {
  return (
    <div className="projects h-screen flex flex-col justify-center items-center pt-28 max-md:pt-[14rem] lg:pt-[15rem] overflow-y-auto">
        <div className="h-screen">
        <h1 className="text-yellow font-bold text-center text-2xl">Check out the projects that I've worked on!</h1>
        

        <section className="w-full py-5 max-md:py-10 max-lg:py-18">
        <div className="container grid gap-10 px-4 py-10 md:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/tsk">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="tsk."
              className="object-cover max-w-[45%] m-auto h-60"
              height={300}
              src="/tsk-text-logo.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">tsk.</h3>
              <p className="text-sm text-lightyellow">A progressive web app with ReactJS, Vite, and Tailwind CSS, emphasizing offline accessibility, privacy, and innovative features, gaining traction with a growing community of daily users.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/sarkisova_care_web">
              <span className="sr-only">View Project</span>
            </Link>
            <img
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
            <img
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
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/sarkisova_logo">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Sarkisova Logo"
              className="object-cover w-[65%] m-auto h-60"
              height={300}
              src="/new-sarkisova-logo-1.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">Sarkisova Logo</h3>
              <p className="text-sm text-lightyellow">I crafted a distinctive logo for a physician's practice, balancing creativity and professionalism to reflect their mission and values.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/raii_data_optimization">
              <span className="sr-only">View Project</span>
            </Link>
            <img
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
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/jammming">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Jammming"
              className="object-cover w-full h-60"
              height={300}
              src="/jammming.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="p-4 bg-darkblue rounded-lg">
              <h3 className="font-semibold text-lg text-green md:text-xl">Jammming</h3>
              <p className="text-sm text-lightyellow">Jammming is a user-friendly web app enabling song lookup, playlist creation, and direct saving to Spotify accounts.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="/projects/sunnyside_landing">
              <span className="sr-only">View Project</span>
            </Link>
            <img
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
            <img
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
            
          </div>
        </div>
      </section>
        </div>
    </div>
  )
}