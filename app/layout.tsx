import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./nav/NavBar";
import AnimatedDiv from "./components/AnimatedDiv";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AOSWrapper from "./components/AOSWrapper";
import Footer from "./footer/Footer";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";
import Head from "next/head"; 
const protest = localFont({
  src: "../public/fonts/ProtestRiot-Regular.ttf",
  variable: "--font-protest",
});
const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
});
const jetbrains = localFont({
  src: "../public/fonts/Jetbrains.ttf",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Aditya",
  description: "full stack",
  keywords: ["Aditya", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css"
      />
    </Head>
      <body
        className={`${poppins.className} ${protest.variable} ${jetbrains.variable}`}
      >
        <AnimatedDiv>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NextTopLoader
              color={
                "orange"
              }
            />

            <Analytics />
            <SpeedInsights />
            <NavBar />
            <AOSWrapper>{children}</AOSWrapper>
            <div className=" bg-zinc-900 md:px-[9rem] relative flex justify-center items-center">
              <Footer className="abolute bottom-0" />
            </div>
          </ThemeProvider>
        </AnimatedDiv>
      </body>
    </html>
  );
}
