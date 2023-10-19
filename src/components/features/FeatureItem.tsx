import React from "react";

interface FeatureItemProps {
  index: number;
  title: string;
  description: string;
}

const FeatureItem = ({ index, title, description }: FeatureItemProps) => {
  return (
    <li className="z-10 flex w-full flex-col items-center gap-y-6 max-w-lg md:max-w-3xl md:flex-row md:gap-x-8 xl:max-w-sm xl:flex-col">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-purple font-serif text-[20px] font-semibold leading-9 text-dark-purple md:mt-6 xl:mt-0 xl:h-14 xl:w-14 xl:text-[24px] xl:leading-10">
        {index + 1}
      </div>
      <div className="flex w-full flex-col items-center gap-y-4 md:items-start xl:items-center">
        <div className="font-serif text-[28px] text-dark-purple max-xl:font-semibold max-xl:leading-9 xl:text-lg">
          {title}
        </div>
        <div className="text-center font-sans text-[16px] text-davy's-grey max-xl:leading-7 md:text-start xl:text-center xl:text-base">
          {description}
        </div>
      </div>
    </li>
  );
};

export default FeatureItem;
