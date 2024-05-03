import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Socials from "@/components/Socials"

// const inter = Inter({ subsets: ["latin"] });

const bricolagegrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: '--font-bricolagegrotesque',
});

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
      <body className={bricolagegrotesque.className}>
        <div className="flex w-full min-h-screen ">
        <Navbar />
        <div className="flex-1 bg-slate-800 justify-center">
          {children}
        </div>
        <Socials />
        </div>
      </body>
    </html>
  );
}
