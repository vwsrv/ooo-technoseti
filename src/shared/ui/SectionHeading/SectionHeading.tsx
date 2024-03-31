"use client";

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { TypeSectionHeadingProps } from "./types";

export const SectionHeading: React.FC<TypeSectionHeadingProps> = (props) => {
  const { variant = "pink", title, titleBold, className } = props;

  return (
    <div className={cn(classes.titleContainer)}>
      <h1 className={cn(className, classes.title, classes[variant])}>
        {title}
        <span>
          <h1 className={cn(className, classes.titleBold)}>{titleBold}</h1>
        </span>
      </h1>
    </div>
  );
};
