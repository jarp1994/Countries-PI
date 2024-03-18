import React from 'react'
import styles from './Filters.module.css'
const Filters = () => {

  

  return (
    <div>
      <form className={styles.forms1} action="">
        <label htmlFor="filter">Continents:</label>
        <select name="filter" id="filter">
          <option value="Api"> Continents</option>
        </select>
      </form>
      <form className={styles.forms1} action="">
        <label htmlFor="filter">Activity:</label>
        <select name="filter" id="filter">
        <option value="Ascendente">Tourist Acitivities</option>
        </select>
      </form>
      <form className={styles.forms1} action="">
        <label htmlFor="order">Order:</label>
        <select name="order" id="order">
          <option value="Ascendente">A-Z</option>
          <option value="Descendente">Z-A</option>
        </select>
      </form>
      <form className={styles.forms1} action="">
        <label htmlFor="attack">Population:</label>
        <select name="attack" id="attack">
          <option value="Ascendente">Population</option>
        </select>
      </form>
    </div>
  )
}

export default Filters
