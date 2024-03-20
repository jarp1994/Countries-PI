import axios from 'axios';

//Obtener todos los paises
export function getAllCountries(){ 
    return async (dispatch)=>{
        try {
            const response = await axios.get("http://localhost:3001/countries")
            dispatch({
                type: "GET_COUNTRIES",
                payload: response.data,
            })
            
        } catch (error) {
            console.error("Error getAllCountries: ", error);            
        }
    }
}



//action para filtro por continente
export function filterByContinent(payload){
    return {
        type: "FILTER_BY_CONTINENT",
        payload
    }
}



//action para filtro por actividad


export function filterByActivity(payload){
    return {
        type: "FILTER_BY_ACTIVITY",
        payload
    }
}



//action para filtro ordenado ascendente y descendente

export function orderByName(payload){
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}
   




// action para filtro por poblacion

export function filterByPopulation(payload){
    return {
        type: "FILTER_BY_POPULATION",
        payload
    }
}

