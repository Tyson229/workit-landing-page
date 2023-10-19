import Image from "next/image";
import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import logoLight from "../../../public/logo-light.svg";

const Header = () => {
  return (
    <div className="z-10 flex w-full justify-between ">
      <Image src={logoLight} alt="Workit logo" />
      <SecondaryButton title="Apply for access" />
    </div>
  );
};

export default Header;
