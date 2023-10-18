import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center bg-ghost-white">
      <div
        className={`hero relative flex w-full flex-col items-center gap-y-16 px-4 py-8`}
      >
        <Header />
        <Intro />
        <div className="h-16"></div>
      </div>

      <div className="relative -translate-y-24 h-48 w-[85%]">
        <Image src="/image-hero.webp" fill alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
