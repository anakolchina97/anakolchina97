import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Label from "../Label";

interface LogoAttributes {
  url: string;
}
interface ICard {
  title: string;
  description: string;
  labels: string;
  logo: {
    data: {
      id: number;
      attributes: LogoAttributes;
    };
  };
  background: {
    data: {
      id: number;
      attributes: LogoAttributes;
    };
  };
}

const Card = ({ title, description, labels, logo, background }: ICard) => {
  const logoUrl = logo?.data?.attributes?.url;
  const bgUrl = background?.data?.attributes?.url;

  return (
    <article className={styles.card}>
      <Label iconName={labels}>{labels}</Label>
      <a className={styles.card__picture} href="#" target="_blank">
        <Image
          className={styles.card__img}
          src={bgUrl}
          fill={true}
          alt="healthy"
          style={{ objectFit: "cover" }}
        />
        <img className={styles.card__logo} src={logoUrl} />
      </a>
      <div className={styles.card__content}>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__description}>{description}</p>
      </div>
    </article>
  );
};

export default Card;
