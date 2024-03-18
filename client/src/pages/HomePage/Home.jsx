import React from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {

//creamos el estado para guardar los countries y no se borren cuando llame mas countries
const [countries, setCountries] = useState([]);


//pagination
const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(10);
const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);




  
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
  }, []);

  //busca el pais por name usando elsearchbar
 const [country, setCountry] = useState(null);
  const getCountryByName = (name)=>{
      axios.get(`http://localhost:3001/name?name=${name}`)
           .then((response)=>{
               setCountry(response.data)
           })
           .catch((error)=>{
              getCountries()
              setCountry(null)
          })
  }

// pagination
  const paginate = (pageNumber) => {setCurrentPage(pageNumber)};


  return (
    
    <div className={styles.containerHome}>
      {location.pathname !== "/" && <NavBar handleSearch={getCountryByName} />}
      <Filters></Filters>
      {country ?  <div className={styles.searchCard}>
                    <div className={styles.cardContainerSearch} ><Card country={country}/>
                    </div>
                  </div> : 
                  <div>
                    <Pagination
                    countriesPerPage={countriesPerPage}
                    countries={countries.length}
                    paginate={paginate}
                    />
                    <Cards countries={currentCountries} />
                  </div>
                  }
                  
                  
    </div>
  )
}

export default Home
