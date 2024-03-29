import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

interface ILabelIcon {
  iconName?: string;
}

const LabelIcon = ({ iconName }: ILabelIcon) => {
  let iconComponent;

  switch (iconName) {
    case "Портфолио":
      iconComponent = "/images/label-icons/portfolio.png";
      break;
    case "Обучение":
      iconComponent = "/images/label-icons/education.png";
      break;
    default:
      iconComponent = "/images/label-icons/portfolio.png";
  }

  return (
    <Image
      width={18}
      height={18}
      className={styles.labelicon}
      src={iconComponent}
      alt="Иконка"
    />
  );
};

export default LabelIcon;
