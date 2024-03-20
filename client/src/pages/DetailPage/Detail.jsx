import React from 'react'
import styles from './Detail.module.css';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  
  const [country, setCountry] = useState({});
  const  { idPais } = useParams();

  const countryDetail = ()=>{
    axios.get(`http://localhost:3001/countries/${idPais}`)
          .then(res => {
            setCountry(res.data)
      
          })
          .catch(err => window.alert("No se trae los detalles del pais"))   
  }



  useEffect(() => {
    countryDetail();
  }, [idPais]);

  
  

  return (
    <div className={styles.containerDetail}>
      {location.pathname !== "/" && <NavBar />}
      <br></br>
      <div className={styles.allstats}>
        {country.flag && (<img className={styles.img} src={country.flag} alt={country.name} />)}
        {country.name && (<p>{country.name}</p>)}
        {country.id && (<p>Id: {country.id}</p>)}
        {country.continent && (<p>Continent: {country.continent}</p>)}
        {country.capital && (<p>Capital: {country.capital}</p>)}
        {country.subregion && (<p>Subregion: {country.subregion}</p>)}
        {country.area && (<p>Area: {country.area}</p>)}
        {country.population && (<p>Population: {country.population}</p>)}
        {country.coatOfArms && (<img className={styles.img} src={country.coatOfArms} alt={country.name} />)}
      </div>
      <div className={styles.activities}>
        {country.activities && (<p>Activities: 
          {country.activities.map((activity) => activity.name + ", ")}
          {country.activities.map((activity) => "dificultad:" + activity.difficulty + ", ")}
          {country.activities.map((activity) => "duracion:" + activity.duration + ", ")}
          {country.activities.map((activity) => activity.season)}</p>)}
      </div>
    </div>
  )
}

export default Detail
