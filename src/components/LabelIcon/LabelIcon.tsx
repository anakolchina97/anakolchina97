import React from "react";
import styles from "./page.module.scss";

interface ILabelIcon {
  iconName?: string;
}

const LabelIcon = ({ iconName }: ILabelIcon) => {
  let iconComponent;

  switch (iconName) {
    case "portfolio":
      iconComponent = "/images/label-icons/portfolio.png";
      break;
    default:
      iconComponent = "/images/label-icons/portfolio.png";
  }

  return <img className={styles.labelicon} src={iconComponent} />;
};

export default LabelIcon;
