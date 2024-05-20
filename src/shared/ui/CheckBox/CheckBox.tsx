"use client";

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { TypeCheckBoxProps } from "./types";

export const CheckBox: React.FC<TypeCheckBoxProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <div className={cn(classes.checkBox)}>
      <span className={cn(classes.icon)}></span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
