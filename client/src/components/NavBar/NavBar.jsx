import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  return (
    <div className={styles.containerNavBar}>
      <h1>Countries to visit</h1>
        <NavLink to="/">
         <button className={styles.home} >Landing</button>
        </NavLink>
        <NavLink to="/home">
         <button className={styles.home} >Home</button>
        </NavLink>
        <NavLink to="/create">
         <button className={styles.create} >Create</button>
        </NavLink>
        <SearchBar/>
    </div>
  )
}

export default NavBar
