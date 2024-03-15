import axios from 'axios';



export const filterContinents = (payload) => {

    return async function(dispatch){
        return dispatch({
            type: "FILTER_CONTINENT",
            payload: payload.data
        })
    }
}


