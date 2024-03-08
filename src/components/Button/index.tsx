import React from "react";
import styles from "./page.module.scss";

interface IButtons {
  children: React.ReactNode;
}

const Button = ({ children }: IButtons) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
