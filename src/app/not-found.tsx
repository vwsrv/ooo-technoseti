import Link from 'next/link';
import { FC } from 'react';
import styles from './styles/not-found.module.scss';

const NotFoundPage: FC = () => (
  <div className={styles.wrapper} data-page="not-found">
    <div className={styles.codeBlock}>
      <h1 className={styles.code}>
        4<span className={styles.codeAccent}>0</span>4
      </h1>
      <span className={styles.decorLine} aria-hidden />
    </div>
    <p className={styles.title}>
      Страница не найдена. Возможно, она была удалена или вы перешли по неверной ссылке.
    </p>
    <Link href="/" className={styles.link}>
      На главную
    </Link>
  </div>
);

export default NotFoundPage;
