import React from 'react'
import styles from './Filters.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Filters = ({filterByContinent, filterByActivity, orderByName, filterByPopulation}) => {

  const [activities, setActivities] = useState([]);

async function getActivities() {
  try{
    const response = await axios.get("http://localhost:3001/activities")
    setActivities(response.data)
  } catch(error){
    console.log(error)
  }
}
useEffect(() => {
  getActivities()
}, [])

  
  return (
    <div>
      <form className={styles.forms1} action="">
        <label htmlFor="filter">Continents:</label>
        <select onChange={(e) => filterByContinent(e.target.value)} name="filter" id="filter">
          <option value=""> Select Continent</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
        </select>
      </form>
      <form className={styles.forms1} action="">
        <label htmlFor="order">Order:</label>
        <select onChange={(e) => orderByName(e.target.value)} name="order" id="order">
        <option value="">Order by Name</option>
          <option value="Ascendente">A-Z</option>
          <option value="Descendente">Z-A</option>
        </select>
      </form>
      <form className={styles.forms1} action="">
        <label htmlFor="population">Population:</label>
        <select  onChange={(e) => filterByPopulation(e.target.value)} name="population" id="population">
        <option value="">Order by Population</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
      </form>
      <form className={styles.forms1} action="">
        <label htmlFor="filter">Activity:</label>
        <select onChange={(e) => filterByActivity(e.target.value)} name="filter" id="filter">
        <option value="">Tourist Acitivities</option>
        {activities.map((activity) => (
          <option key={activity.id} value={activity.name}>{activity.name}</option>
        ))}
        </select>
      </form>
    </div>
  )
}

export default Filters
