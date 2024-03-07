import styles from './SearchBar.module.css'
import React from 'react'

const SearchBar = () => {
  return (
    
    <div className={styles.containerSearch} >
            <input className={styles.input} 
          type='search' 
          name="search"
          id="search"
          placeholder="Search by name..."
        //   onChange={}
            />
            <button className={styles.search} onClick={()=>alert("buscando cuando le das click")}>Search</button> 
    </div>
    
  )
}

export default SearchBar
