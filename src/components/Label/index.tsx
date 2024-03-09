import React from "react";
import styles from "./page.module.scss";
import LabelIcon from "../LabelIcon/LabelIcon";

interface ILabel {
  iconName: string;
  children: React.ReactNode;
}

const Label = ({ iconName, children }: ILabel) => {
  return (
    <div className={styles.label}>
      <LabelIcon iconName={iconName} />
      {children}
    </div>
  );
};

export default Label;
