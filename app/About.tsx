/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
const About = () => {
  return (
    <div className="md:w-[40%]">
      <div className=" flex-col items-center">
      <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-6">
        <span className="inline-block px-1 text-xs relative">
          <span className="inline-block">ABOUT</span>
          <span className="inline-block bg-blue-600 h-2 w-[91%] absolute bottom-0 left-[3.3px] -z-10 "></span>
        </span>
      </h2>
        <div className="flex items-center gap-3 my-4">
          <div>
            <p className="inline-block font-jetbrains text-xl sm:text-2xl  font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
              Aditya Trivedi
            </p>
          </div>
        </div>
      </div>
      <p className="opacity-100 dark:text-zinc-400 text-sm font-jetbrains">
        I&apos;m a skilled fulltstack developer proficient in JavaScript, HTML, CSS, React.js, Node.js Next.js, and Node.js. Skilled
in database management with Prisma.{" "}
Demonstrated ability to deliver high-quality, scalable web applications.Strong
        problem-solving skills and effective collaboration in cross-functional teams.
      </p>
      <div className="flex items-center mt-5 gap-1">
      </div>
    </div>
  );
};

export default About;
