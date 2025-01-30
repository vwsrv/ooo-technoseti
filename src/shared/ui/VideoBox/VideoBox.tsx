"use client";

import React from "react";
import { TypeVideoBoxProps } from "./types";
import cn from "classnames";
import classes from "./styles.module.scss";

export const VideoBox: React.FC<TypeVideoBoxProps> = (props) => {
  const { onClick, children, disabled } = props;

  return (
    <button disabled={disabled} className={cn(classes.videobox)}>
      <span />
      <p className="description">{children}</p>
    </button>
  );
};
