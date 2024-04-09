'use client';

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import Image from "next/image";
import { TypeTechCardProps } from "./types";
import techCardLogo from '../../../images/main-logo/logo-short.svg';


export const TechCard: React.FC<TypeTechCardProps> = (props) => {
  const { cardItemData } = props;

  return (
    <li className={cn(classes.techCard)}>
      <span className={cn(classes.techCardLogoHolder)}>
        {cardItemData.image ? (
          <Image
            className={cn(classes.techCardImage)}
            height={70}
            width={80}
            src={cardItemData.image}
            alt={cardItemData.name}
          />
        ) : (
          <Image
            src={techCardLogo}
            alt={cardItemData.name}
            className={cn(classes.techCardImage)}
            height={70}
            width={80}
          />
        )}
      </span>
      <div className={cn(classes.techCardContainer)}>
        <h3 className={cn(classes.techCardName)}>{cardItemData.name}</h3>
        <p className="description">{cardItemData.description}</p>
      </div>
    </li>
  );
};