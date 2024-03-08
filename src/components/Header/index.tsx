import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Link from "next/link";
import Telegram from "../Icons/Telegram";
import Github from "../Icons/Github";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Link className={styles.header__logo} href={"/"}>
          Ana
        </Link>
        <ul className={`${styles.header__links} ${styles.links}`}>
          <li className={styles.links__item}>
            <a
              className={styles.links__link}
              href="https://t.me/anakolchina97"
              target="_blank"
            >
              <Telegram />
            </a>
          </li>
          <li className={styles.links__item}>
            <a
              className={styles.links__link}
              href="https://github.com/anakolchina97"
              target="_blank"
            >
              <Github />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
