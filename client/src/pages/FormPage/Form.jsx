import React from 'react';
import styles from './Form.module.css'
import NavBar from '../../components/NavBar/NavBar';

const Form = () => {
  return (
    <div className={styles.containerForm} >
            {location.pathname !== "/" && <NavBar/>}
            <br></br>
                <form>
                <img className={styles.img} src="https://thumbs.dreamstime.com/z/hora-de-planear-el-concepto-del-viaje-mapa-elegante-y-pasaporte-o-cuaderno-102169458.jpg?ct=jpeg"alt='Image not found' />
                  <label>
                    Nombre:
                    <input type="text" name="name"/>
                  </label>
                  <label>
                    Dificultad:
                    <input type="text" name="image" />
                  </label>
                  <label>
                    Duracion:
                    <input type="number" name="hp" />
                  </label>
                  <label>
                    Temporada:
                    <input type="number" name="attack"/>
                  </label>
                  <label>
                    Paises:
                    <select name="types" >
                      <option value="">Selecciona uno o varios pais</option>
                    </select>
                  </label>
                  <button className={styles.buttonForm} type="submit">Crear Actividad Turistica</button>
                </form>
        </div>
  )
}

export default Form
