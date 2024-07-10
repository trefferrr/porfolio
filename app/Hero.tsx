import CurvedText from "./components/CurvedText";

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade"
        className="h-auto mb-[2.5rem] md:my-0 md:h-[70vh] pr-3 flex items-center justify-center "
      >
        <div className="mx-[5rem] md:mx-[3rem] lg:mx-[12rem] w-full relative flex items-center justify-start sm:justify-center">
          <h1 className="text-5xl font-bold md:text-7xl xl:text-[5rem] text-left sm:text-center leading-tight md:leading-tight ">
            Hi, I&apos;m{" "}
             <span className="font-protest text-5xl md:text-7xl font-normal bg-orange-600 relative text-white px-4 rounded inline-block -rotate-6 mt-1">
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute top-1 left-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute right-1 top-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute bottom-1 left-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
                <span className="bg-[#0A0A0A] h-2 w-2 inline-block absolute bottom-1 right-1 rounded-full">
                  <span className="bg-orange-500 h-1 w-1 inline-block absolute top-[1.6px] left-[1.8px] rounded-full"></span>
                </span>
               Aditya
              </span>
            Yet another{" "}
            <span
              className={` text-5xl italic md:text-7xl xl:text-[5rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold text-slate-600 dark:text-zinc-400`}
            >
              full stack developer.
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <CurvedText />
      </div>

      <p className="text-sm text-zinc-500 text-center mt-9 font-jetbrains">
        <span className=" bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#FDBA66] to-[#FD6D71]">
          console
        </span>
        .
        <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-[#FFEFBA] to-[#FFFFFF]">
          log
        </span>
        <span> (</span>`I am a full stack Developer & Competitive programmer based in
        India, I <span className="opacity-70">💛</span> building Web Apps.`
        <span>)</span>
      </p>
    </>
  );
};

export default Hero;
