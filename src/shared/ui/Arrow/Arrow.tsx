"use-client";

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { TypeArrowProps } from "./types";

export const Arrow: React.FC<TypeArrowProps> = (props) => {
  const { disabled } = props;

  return <button disabled={disabled} className={cn(classes.arrow)} />;
};
