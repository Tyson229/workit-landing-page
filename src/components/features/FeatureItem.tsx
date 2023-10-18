import React from "react";

interface FeatureItemProps {
  index: number;
  title: string;
  description: string;
}

const FeatureItem = ({ index, title, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-col items-center gap-y-6 z-10">
      <div className="text-dark-purple border-dark-purple flex h-10 w-10 items-center justify-center rounded-full border font-serif text-[20px] font-semibold leading-9">
        {index + 1}
      </div>
      <div className="flex w-full flex-col items-center gap-y-4">
        <div className="text-dark-purple font-serif text-[28px] font-semibold leading-9">
          {title}
        </div>
        <div className="text-davy's-grey text-center font-sans text-[16px] leading-7">
          {description}
        </div>
      </div>
    </li>
  );
};

export default FeatureItem;
