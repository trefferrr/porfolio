import Socials from "../components/Socials";
import dynamic from "next/dynamic";
import Link from "next/link";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} text-xs
     bottom-0 left-0 z-20 w-full p-4 border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900 border-0`}
    >
      <p className=" text-gray-500 text-center sm:text-left  dark:text-gray-400">
        © 2024{" "}
        <a href="https://github.com/Ady4901jk" className="hover:underline">
          Aditya Trivedi
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
