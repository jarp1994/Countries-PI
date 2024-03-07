import React from 'react';
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
  return (
    <div className={styles.containerHome}>
      {location.pathname !== "/" && <NavBar/>}
      <p className={styles.title}>Este es el homeeeeeeeeeeeeeeeeeeeeeeeeee</p>
    </div>
  )
}

export default Home
