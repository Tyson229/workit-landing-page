import React from "react";

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
  return (
    <button className="bg-eucalyptus text-dark-purple hover:text-eucalyptus hover:border-eucalyptus box-content px-6 py-4 font-sans text-base font-bold tracking-tight transition-colors duration-200 ease-linear hover:border-2 hover:bg-transparent">
      {title}
    </button>
  );
};

export default PrimaryButton;
