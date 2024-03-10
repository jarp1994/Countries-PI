import React from 'react'
import styles from './Detail.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [country, setCountry] = useState(null)
    let { id } = useParams();
    const getCountry = () => {
        // axios.get("http://localhost:3001/countries" + id)
        //     .then((response) => {
        //         setCountry(response.data)
        //     })
        //     .catch((error) => alert("No se trae los detalles del pais"))
    }
// trae el pais con sus detalles al detail
useEffect(() => {
  getCountry()
}, [])



  return (
    <div className={styles.containerDetail}>
      {location.pathname !== "/" && <NavBar />}
      <div className={styles.allstats}>
      </div>
    </div>
  )
}

export default Detail
