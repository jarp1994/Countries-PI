import React from 'react'
import styles from './Detail.module.css';
import NavBar from '../../components/NavBar/NavBar';

const Detail = () => {
  return (
    <div className={styles.containerDetail}>
      {location.pathname !== "/" && <NavBar />}
      <p>este es el detaillllllll de cada paaaaaaaaaaaaaissssssssss</p>
    </div>
  )
}

export default Detail
