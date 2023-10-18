import React from "react";
import { features } from "@/lib/data";
import FeatureItem from "./FeatureItem";
const Features = () => {
  return (
    <ul className="features relative flex w-full flex-col items-center gap-y-10 px-4">
      {features.map(({ title, description }, i) => (
        <FeatureItem
          key={i}
          index={i}
          title={title}
          description={description}
        />
      ))}
      <li className="h-16 w-full"></li>
    </ul>
  );
};

export default Features;
