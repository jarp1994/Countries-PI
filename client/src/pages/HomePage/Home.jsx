import React from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { filterByContinent, getAllCountries, orderByName, filterByPopulation, filterByActivity } from '../../redux/actions'
import { useDispatch, useSelector, } from 'react-redux'

const Home = () => {

const dispatch = useDispatch();
let countries = useSelector((state)=> state.countries)


//pagination
const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(10);
const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);



  // trae los countries al home desde la action
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  //busca el pais por name usando elsearchbar
 const [country, setCountry] = useState(null);
  const getCountryByName = (name)=>{
      axios.get(`http://localhost:3001/name?name=${name}`)
           .then((response)=>{
               setCountry(response.data)
           })
           .catch((error)=>{
              setCountry(null)
          })
  }

// pagination
  const paginate = (pageNumber) => {setCurrentPage(pageNumber)};

  const filterContinent = (continent) => {
    dispatch(filterByContinent(continent));
    setCurrentPage(1);
  }

  const orderName = (order) => {
    dispatch(orderByName(order));
    setCurrentPage(1);
    
  }

  const orderPopulation = (order) => {
    dispatch(filterByPopulation(order));
    setCurrentPage(1);
    
  }

  const orderActivity = (order) => {
    dispatch(filterByActivity(order));
    setCurrentPage(1);
    
  }



  return (
    
    <div className={styles.containerHome}>
      {location.pathname !== "/" && <NavBar handleSearch={getCountryByName} />}
      <Filters 
      filterByContinent={filterContinent}
      filterByActivity={orderActivity}
      orderByName={orderName}
      filterByPopulation={orderPopulation}
      ></Filters>
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
