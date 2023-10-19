import Image from "next/image";
import React from "react";
import imageFounder from "../../../public/image-founder.webp";
import pattern3 from "../../../public/bg-pattern-3.svg";
import InfoBox from "./InfoBox";

const Person = () => {
  return (
    <div className="relative mt-10 flex w-full max-w-screen-xl flex-col items-center px-6 md:mt-24 md:flex-row md:items-start md:justify-end">
      <Image
        src={imageFounder}
        alt="Image founder"
        className="w-3/4 max-w-xs xl:max-w-md translate-y-16 md:absolute md:left-12 md:top-0 md:translate-y-0"
      />
      <InfoBox />
      <Image
        src={pattern3}
        alt="Pattern 3"
        className="absolute -bottom-24 right-8 z-10 hidden md:block"
      />
    </div>
  );
};

export default Person;
