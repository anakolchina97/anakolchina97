import React from "react";
import styles from "./page.module.scss";

interface IContainer {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
