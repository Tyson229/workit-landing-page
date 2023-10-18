import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Intro = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-10 z-10">
      <div className="text-center font-serif text-[50px] leading-[60px] text-white">
        Data <span className="border-eucalyptus border-b-2">tailored</span> to
        your needs.
      </div>
      <PrimaryButton title="Learn more" />
    </div>
  );
};

export default Intro;
