import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { TypeTechCardListProps } from "./types";
import { TechCard } from "./TechCard/TechCard";

export const TechCardList: React.FC<TypeTechCardListProps> = (props) => {
  const { techCardList } = props;

  return (
    <div className={cn(classes.techCardList)}>
      <ul className={cn(classes.techCardListContainer)}>
        {techCardList.map((cardItemData, index) => (
          <TechCard cardItemData={cardItemData} key={index} />
        ))}
      </ul>
    </div>
  );
};
