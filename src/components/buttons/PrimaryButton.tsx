import React from "react";

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
  return (
    <button className="bg-eucalyptus border-2 border-transparent text-dark-purple hover:text-eucalyptus hover:border-eucalyptus box-content px-6 py-4 font-sans text-base font-bold tracking-tight transition-colors duration-200 ease-linear hover:bg-transparent w-fit">
      {title}
    </button>
  );
};

export default PrimaryButton;
