import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import mainfont from 'next/font/local';
import accentfont from 'next/font/local'; 

// const inter = Inter({ subsets: ["latin"] });

// const bricolagegrotesque = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600"],
//   variable: '--font-bricolagegrotesque',
// });

const ahganirya = accentfont({
  src: [
    {
      path: "../../public/fonts/AhganiryaPersonalUse-Yznaj.ttf",
      weight: "400"
    }
  ],
  variable: "--font-ahganirya"
})

const bricolagegrotesque = mainfont({
  src: [
    {
      path: "../../public/fonts/BricolageGrotesque-VariableFont.ttf",
      weight: "500"
    }
  ],
  variable: "--font-bricolagegrotesque"
})



export const metadata: Metadata = {
  title: "Ingrid De Silva",
  description: "Front-end Developer Portfolio",
  icons:{
    icon:['/favicon.ico?v=4'],
    // apple:['/apple-touch-icon.png?v=4'],
    // shortcut:['/apple-touch-icon.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ahganirya.className} ${bricolagegrotesque.className}`}>
        <div className="flex w-full min-h-screen">
          {/* <Navbar /> */}
          <div className="flex-1 justify-center">
            {children}
          </div>
          {/* <Socials /> */}
        </div>
      </body>
    </html>
  );
}
