import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Images from "./Images";

const Hero = () => {
  return (
    <div className="hero relative flex w-full justify-center bg-ghost-white">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center gap-y-16 px-4 py-8 md:px-8">
        <Header />
        <Intro />
        <Images />
      </div>
    </div>
  );
};

export default Hero;
