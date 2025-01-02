"use client";

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { CheckBox } from "@/shared/ui/CheckBox";

export const Advantages: React.FC = () => {
  const checkBoxData = [
    { title: "Быстрый расчет", subtitle: "Цены производителя" },
    { title: "Индивидуальная поддержка", subtitle: "Цены производителя" },
    { title: "Удобно", subtitle: "Полная комплектация" },
  ];

  return (
    <section className={cn(classes.advantages)}>
      {checkBoxData.map((data, index) => (
        <CheckBox key={index} title={data.title} subtitle={data.subtitle} />
      ))}
    </section>
  );
};
