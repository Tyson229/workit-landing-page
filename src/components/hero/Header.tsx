import Image from "next/image";
import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const Header = () => {
  return (
    <div className="flex w-full max-w-2xl justify-between z-10">
      <div className="relative w-1/4">
        <Image
          src={"/logo-light.svg"}
          fill
          alt="Workit logo"
          sizes="(max-width:768px) 40vw, 20vw"
          priority
        />
      </div>
      <SecondaryButton title="Apply for access" />
    </div>
  );
};

export default Header;
