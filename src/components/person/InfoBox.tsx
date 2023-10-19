import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const InfoBox = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center gap-y-4 bg-dark-purple p-8 text-center text-white md:mt-44 md:w-3/4 md:items-start md:px-14 md:py-12 md:text-start xl:w-2/3">
      <div className="md:text-48 font-serif text-lg tracking-[-0.07em] md:leading-[56px] xl:text-xl">
        Be the first to test
      </div>
      <p
        className="mb-2 font-sans text-[16px] font-extralight leading-7 xl:text-base
      "
      >
        Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call
        with me to become a beta tester for our app and kickstart your company.
        Apply for access below and I&apos;ll be in touch to schedule a call.
      </p>
      <PrimaryButton title="Apply for access" />
    </div>
  );
};

export default InfoBox;
