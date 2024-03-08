import React from "react";
import styles from "./page.module.scss";
import LabelIcon from "../LabelIcon/LabelIcon";

interface ILabel {
  children: React.ReactNode;
}

const Label = ({ children }: ILabel) => {
  return (
    <div className={styles.label}>
      <LabelIcon />
      {children}
    </div>
  );
};

export default Label;
