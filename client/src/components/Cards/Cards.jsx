import Card from "../Card/Card";
import styles from "./Cards.module.css";
import React from "react";

const Cards = ({countries}) => {
  return (
    <div className={styles.containerCards}>
      {countries.map((country) => (<Card key={country.id} country={country} />))}
    </div>
  )
}

export default Cards
