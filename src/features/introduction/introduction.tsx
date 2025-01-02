"use client";

import styles from "./styles.module.scss";
import { SectionText } from "@/shared/ui/SectionText";
import { Button } from "@/shared/ui/Button";
import { VideoBox } from "@/shared/ui/VideoBox";

export const Introduction: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <SectionText
            variant="pink"
            title="Комплектация cтроительных объектов и материалов"
            titleBold="для инженерных сетей"
            subtitle="Мы молодая быстрорастущая организация, которая занимается поставкой труб, фассоных изделий, запорной арматуры для систем водоснабжения, водоотведения, электрификации, газификации. У нас два больших собственных склада в Москве и Краснодаре"
          />
          <Button style={{ margin: "0 30px 0 0" }} variant="blue">
            Продукция
          </Button>
          <VideoBox disabled={false}>Видео о компании</VideoBox>
        </div>
      </section>
    </div>
  );
};
