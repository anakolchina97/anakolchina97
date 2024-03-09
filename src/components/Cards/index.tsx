"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

import styles from "./page.module.scss";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: data } = await axios.get(
          "http://80.78.243.66:1337/api/cards?populate=*"
        );
        setCards(data.data);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return (
    <section className={styles.cards}>
      {cards.map(
        ({
          id,
          attributes: { title, description, labels, logo, background },
        }) => (
          <Card
            key={id}
            title={title}
            description={description}
            labels={labels}
            logo={logo}
            background={background}
          />
        )
      )}
    </section>
  );
};

export default Cards;
