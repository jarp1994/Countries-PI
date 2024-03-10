import styles from './SearchBar.module.css'
import React from 'react'
import { useState } from 'react';

const SearchBar = ({searchByName}) => {

const [search, setSearch] = useState('');

  return (
    
    <div className={styles.containerSearch} >
            <input className={styles.input} 
          type='search' 
          name="search"
          id="search"
          placeholder="Search by name..."
          // onChange={(input)=>setSearch(input.target.value)}
            />
            <button className={styles.search} onClick={()=>alert("se busco el pais")}>Search</button> 
    </div>
    
  )
}

export default SearchBar
