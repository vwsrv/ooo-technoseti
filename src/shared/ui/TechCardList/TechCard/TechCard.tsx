'use client';

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { TypeTechCardProps } from "./types";
import Image from "next/image";

export const TechCard: React.FC<TypeTechCardProps> = (props) => {
  const { name, description, imageUrl } = props;

  return (
    <li className={cn(classes.techCard)}>
      <span className={cn(classes.techCardLogoHolder)}>
        <Image
          className={cn(classes.techCardImage)}
          height={70}
          width={80}
          src={imageUrl}
          alt={name}
        />
      </span>
      <div className={cn(classes.techCardContainer)}>
        <h3 className={cn(classes.techCardName)}>{name}</h3>
        <p className="description">{description}</p>
      </div>
    </li>
  );
};
