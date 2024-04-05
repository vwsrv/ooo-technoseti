import React from "react";
import { SectionHeading } from "@/shared/ui/SectionHeading/SectionHeading";
import { TechCard } from "@/shared/ui/TechCard/TechCard";
import techImage from "../../shared/images/for-tech-card/tech-one.svg";

export const DevPage: React.FC = () => {
  return (
    <div>
      <div>
        <TechCard
          name="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
          imageUrl={techImage}
        />


      </div>
      <TechCard
          name="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
          imageUrl={techImage}
        />
    </div>
  );
};
