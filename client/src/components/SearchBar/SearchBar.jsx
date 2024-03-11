import styles from './SearchBar.module.css'
import React from 'react'
import { useState } from 'react';

const SearchBar = ({handleSearch}) => {

const [countryName, setCountryName] = useState('');

  return (
    
    <div className={styles.containerSearch} >
            <input className={styles.input} 
          type='search' 
          name="search"
          id="search"
          placeholder="Search by name..."
          onChange= {(e)=>{setCountryName(e.target.value)}}
            />
            <button className={styles.search} onClick={()=>{handleSearch(countryName)}}>Search</button> 
    </div>
    
  )
}

export default SearchBar
