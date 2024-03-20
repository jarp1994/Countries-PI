import React from 'react';
import styles from './Form.module.css'
import NavBar from '../../components/NavBar/NavBar';
import validation from './validation';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {


  //creacion actividad y guardarla en base de datos
  const [activity, setActivity] = useState({
    name: '',
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  });

  //para encontrar errores en el formulario
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActivity({
      ...activity,
      [name]: value,
    })
    setErrors(
      validation({
        ...activity,
        [name]: value,
      })
    )
  }

  // crear la actividad y guardarla en la base de datos

  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axios.get("http://localhost:3001/countries")
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getCountries()

  }, [])

  const handleChange = e => {
    const { name, value } = e.target;
    setCountries(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCountryChange = e => {
    const { value } = e.target;
    setActivity(prevState => ({
      ...prevState,
      countries: [...prevState.countries, value]
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/activities", activity)
      .then(() => {
        alert("Tu actividad fue creada con exito");
      })
      .catch((error) => alert(error.response.data.error));
  };


  return (
    <div className={styles.containerForm} >
      {location.pathname !== "/" && <NavBar />}
      <br></br>
      <form onSubmit={handleSubmit}>
        <img className={styles.img} src="https://thumbs.dreamstime.com/z/hora-de-planear-el-concepto-del-viaje-mapa-elegante-y-pasaporte-o-cuaderno-102169458.jpg?ct=jpeg" alt='Image not found' />
        <label>
          Activity Name:
          <input className={styles.input}
            type="text"
            name="name"
            placeholder='Escribe tu actividad...'
            value={activity.name}
            onChange={handleInputChange}>
          </input>
          <p className={styles.error}>{errors.name && errors.name}</p>
        </label>
        <label>
          Difficulty:
          <input className={styles.input}
            type="number"
            name="difficulty"
            placeholder='Escribe la dificultad que deseas...'
            value={activity.difficulty}
            onChange={handleInputChange}>
          </input>
          <p className={styles.error}>{errors.difficulty && errors.difficulty}</p>
        </label>
        <label>
          Duration:
          <input className={styles.input}
            type="number"
            name="duration"
            placeholder='cual es la duracion que deseas...'
            value={activity.duration}
            onChange={handleInputChange}>
          </input>
          <p className={styles.error}>{errors.duration && errors.duration}</p>
        </label>
        <label>
          Season:
          <select className={styles.input} name="season"  onChange={handleInputChange}>
            <option value="">Selecciona una temporada</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </label>
        <label>
          Countries:
          <select className={styles.input} name="countries" onChange={handleCountryChange} >
            <option value="">Selecciona uno o varios pais</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
          <div>
            <ul>
              {activity.countries.map((countryId) => (
                <li key={countryId}>
                  {countries.find((country) => country.id === countryId)?.name}
                </li>
              ))}
            </ul>
          </div>
        </label>
        <button className={styles.buttonForm} type="submit">Crear Actividad Turistica</button>
      </form>
    </div>
  )
}

export default Form
