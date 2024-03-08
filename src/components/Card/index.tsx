import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Card = () => {
  return (
    <article className={styles.card}>
      <a className={styles.card__picture} href="#" target="_blank">
        <Image
          className={styles.card__img}
          src="/images/healthy.jpg"
          fill={true}
          alt="healthy"
          style={{ objectFit: "cover" }}
        />
        <img className={styles.card__logo} src="/images/healthy-logo.svg" />
      </a>
      <div className={styles.card__content}>
        <p className={styles.card__title}>Healthy</p>
        <p className={styles.card__description}>
          Разработка лендинга на&nbsp;VueJS. Это мой первый опыт самостоятельной
          разработки проекта с&nbsp;использованием технологии VueJS.
        </p>
      </div>
    </article>
  );
};

export default Card;
