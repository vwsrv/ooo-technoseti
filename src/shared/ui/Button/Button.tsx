"use-client";

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { TypeButtonProps } from "./types";

export const Button: React.FC<TypeButtonProps> = (props) => {
  const {
    variant = "pink",
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <button
        disabled={disabled}
        className={cn(className, classes.button, classes[variant])}
        {...otherProps}
    >
        {children}
    </button>
  )
};
