import React from "react";
import { features } from "@/lib/data";
import FeatureItem from "./FeatureItem";
const Features = () => {
  return (
    <ul className="features relative flex w-full flex-col items-center justify-center gap-y-10 px-4 pb-16 pt-32 md:pt-48 xl:flex-row xl:gap-x-10 xl:pb-36 xl:pt-56">
      {features.map(({ title, description }, i) => (
        <FeatureItem
          key={i}
          index={i}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
};

export default Features;
