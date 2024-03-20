

//definir el initialState:
let initialState = {
    allCountries: [],
    countries: [],
    filterAllFilters: [],
    activities: [],
}
function rootReducer(state=initialState, action){
    switch (action.type){

        case "GET_COUNTRIES":
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload,
                filterCo: action.payload
            }
        
        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.payload
            }
        
            case "FILTER_BY_ACTIVITY":
                
        
        let info
        const filterActivity = state.activities.filter((activity) => {

          if (activity.name === action.payload) {
            info= activity.Countries.map(country => ({
                id: country.cca3,
                name: country.name,
                flag: country.flag,
                continent: country.continent,
                population: country.population,
                capital: country.capital,
                coatOfArms: country.coatOfArms
          }));

        return info
        }})

          return {
            ...state,
            countries: info,

          };

            case "FILTER_BY_CONTINENT":
            const filteredContinents = state.allCountries.filter(country => country.continent === action.payload)
            return {
                ...state,
                countries: filteredContinents
            }

         
        case "ORDER_BY_NAME":
            const sortedCountries = [...state.allCountries]
            sortedCountries.sort(function(a, b){
        
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase();
        if(nameA > nameB) return action.payload === "Ascendente" ? 1 : -1;
        if(nameB > nameA) return action.payload === "Ascendente" ? -1 : 1;
        return 0;
         });
        return {
        ...state,
        countries: sortedCountries
        }


        case "FILTER_BY_POPULATION":
            const orderPopulation = [...state.allCountries]
            
            orderPopulation.sort(function(a, b){
                const populationA = a.population
                const populationB = b.population
                if( populationA > populationB) return action.payload === "Ascendente" ? 1 : -1;
                if( populationB > populationA) return action.payload === "Ascendente" ? -1 : 1;
                return 0;
            })
            return {
                ...state,
                countries: orderPopulation
            }
            
        default:
            return state
    }
}

export default rootReducer
