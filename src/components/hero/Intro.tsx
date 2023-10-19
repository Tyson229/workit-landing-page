import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Intro = () => {
  return (
    <div className="z-10 flex flex-col items-center gap-y-10 px-4">
      <div className="text-center font-serif text-[50px] leading-[60px] text-white md:text-xl">
        Data <span className="border-b-2 border-eucalyptus">tailored</span> to{" "}
        <br />
        your needs.
      </div>
      <PrimaryButton title="Learn more" />
    </div>
  );
};

export default Intro;
