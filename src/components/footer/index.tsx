import Image from "next/image";
import React from "react";
import logoDark from "../../../public/logo-dark.svg";
import FacebookLogo from "../../../public/icon-facebook";
import TwitterLogo from "../../../public/icon-twitter";
import InstagramLogo from "../../../public/icon-instagram";

const Footer = () => {
  return (
    <div className="mb-16 mt-[4.5rem] flex w-full flex-col items-center justify-center gap-y-14">
      <Image src={logoDark} alt="Dark logo" />

      <ul className="flex items-center gap-x-7">
        <li className="fill-davy's-grey  opacity-80 hover:cursor-pointer hover:fill-dark-purple hover:opacity-100">
          <FacebookLogo />
        </li>
        <li className="fill-davy's-grey opacity-80 hover:cursor-pointer hover:fill-dark-purple hover:opacity-100">
          <TwitterLogo />
        </li>
        <li className="fill-davy's-grey opacity-80 hover:cursor-pointer hover:fill-dark-purple hover:opacity-100">
          <InstagramLogo />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
