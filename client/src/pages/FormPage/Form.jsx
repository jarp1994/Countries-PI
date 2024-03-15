import React from 'react';
import styles from './Form.module.css'
import NavBar from '../../components/NavBar/NavBar';
import validation from './validation';
import { useState } from 'react';

const Form = () => {

// para las propiedades en el formulario
const [input, setInput] = useState({
  name: "",
  difficulty: "",
  duration: "",
})


  //para encontrar errores en el formulario
  const [errors, setErrors] = useState({
    name:"",
    difficulty: "",
    duration: "",
  });

  const handleInputChange = (event)=>{
    const {name,value} = event.target;
    setInput({
        ...input,
        [name]: value,
    })
    setErrors(
        validation({
            ...input,
            [name]: value,
        })
    )
 }


  return (
    <div className={styles.containerForm} >
            {location.pathname !== "/" && <NavBar/>}
            <br></br>
                <form>
                <img className={styles.img} src="https://thumbs.dreamstime.com/z/hora-de-planear-el-concepto-del-viaje-mapa-elegante-y-pasaporte-o-cuaderno-102169458.jpg?ct=jpeg"alt='Image not found' />
                  <label>
                    Activity Name:
                    <input className={styles.input}
                    type="text" 
                    name="name" 
                    placeholder='Escribe tu actividad...'
                    value={input.name}
                    onChange={handleInputChange}>
                    </input>
                    <p className={styles.error}>{errors.name && errors.name}</p>
                  </label>
                  <label>
                    Difficulty:
                    <input className={styles.input}
                    type="text" 
                    name="difficulty" 
                    placeholder='Escribe la dificultad que deseas...'
                    value={input.difficulty}
                    onChange={handleInputChange}>
                    </input>
                    <p className={styles.error}>{errors.difficulty && errors.difficulty}</p>
                  </label>
                  <label>
                    Duration:
                    <input className={styles.input}
                    type="text" 
                    name="duration" 
                    placeholder='cual es la duracion que deseas...'
                    value={input.duration}
                    onChange={handleInputChange}>
                    </input>
                    <p className={styles.error}>{errors.duration && errors.duration}</p>
                  </label>
                  <label>
                    Season:
                    <select className={styles.input} name="seasons" >
                      <option value="">Spring</option>
                      <option value="">Summer</option>
                      <option value="">Autumn</option>
                      <option value="">Winter</option>
                    </select>
                  </label>
                  <label>
                    Countries:
                    <select className={styles.input} name="types" >
                      <option value="">Selecciona uno o varios pais</option>
                    </select>
                  </label>
                  <button className={styles.buttonForm} type="submit">Crear Actividad Turistica</button>
                </form>
        </div>
  )
}

export default Form
