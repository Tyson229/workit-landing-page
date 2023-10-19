import React from "react";
import Image from "next/image";
import imageHero from "../../../public/image-hero.webp";
import pattern1 from "../../../public/bg-pattern-1.svg";
import pattern2 from "../../../public/bg-pattern-2.svg";
const Images = () => {
  return (
    <>
      <div className="block h-[6.5rem] w-full md:h-36 xl:h-56"></div>
      <Image
        src={pattern1}
        className="absolute -left-60 top-20 hidden md:block xl:-left-64 xl:top-24"
        alt="Pattern 1"
      />
      <Image
        src={pattern2}
        className="absolute -right-24 bottom-24 hidden md:block xl:-right-36 xl:top-[40%]"
        alt="Pattern 2"
      />

      <Image
        src={imageHero}
        alt="Image hero"
        priority
        className="absolute -bottom-[20%] z-10 w-11/12 max-w-md md:w-2/3 md:max-w-lg xl:w-2/3 xl:max-w-2xl"
      />
    </>
  );
};

export default Images;
