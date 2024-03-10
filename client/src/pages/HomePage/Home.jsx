import React from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import axios from 'axios';
import { useState, useEffect} from 'react';

const Home = () => {
  //creamos el estado para guardar los countries y no se borren cuando llame mas countries
  const [countries, setCountries] = useState([]);
  const getCountries = () =>{
    axios.get("http://localhost:3001/countries")
          .then(res => {
            setCountries(res.data)
          })
          .catch(err => console.log("No se traen los paises"))

  }

  // trae los countries al home
  useEffect(() => {
    getCountries()
  })

  //busca el pais por name usando elsearchbar

  const [searchCountry, setSearchCountry] = useState({})
  const getCountryByName = (name)=>{
      axios.get(`http://localhost:3001/name?name=${name}`)
           .then((response)=>{
               setSearchCountry(response.data)
               console.log(response.data)
           })
           .catch((error)=>alert("Couldnt find country"))
  }


  return (
    <div className={styles.containerHome}>
      {location.pathname !== "/" && <NavBar searchByName={getCountryByName}/>}
      <Filters></Filters>
      <Cards countries={countries} />
    </div>
  )
}

export default Home
