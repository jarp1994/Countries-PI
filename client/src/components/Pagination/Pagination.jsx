import React from "react";
import styles from './Pagination.module.css'

export default function paginate({countriesPerPage, countries, paginate}) {
    const pageNumbers = [];
    for(let i= 1; i<= Math.ceil(countries/countriesPerPage); i++){
        pageNumbers.push(i);
    }

    return (

        <div className={styles.paginationContainer}>
            <nav>
            <ul className={styles.pagination}>
                {pageNumbers && pageNumbers.map(number => (
                    <li className={styles.number} key={number}>
                    <a onClick={()=>{paginate(number)}}>{number}</a>
                    </li>
                ))}
            </ul>
            </nav>
        </div>
    )
}