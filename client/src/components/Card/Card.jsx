import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({country}) => {
  return (
    <Link className={styles.link} to= {"/detail/" + country.id} >
        <div className={styles.containerCard}>
          <img className={styles.image} src={country.flag} alt={country.name}/>
          <h2>{country.name}</h2>
          <h4>Continent: {country.continent}</h4>
          <h4>Capital: {country.capital}</h4>
          <h4>Population: {country.population}</h4>
          <img className={styles.image1} src={country.coatOfArms} alt={country.name}/>
        </div>
    </Link>
  )
}

export default Card
