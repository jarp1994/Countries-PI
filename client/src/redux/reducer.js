




//definir el initialState:
let initialState = {
    allCountries: [],
    countries: [],
    filterAllFilters: [],
    activities: [],
    combineFilters: true
}
function rootReducer(state = initialState, action) {
    switch (action.type) {

        case "GET_COUNTRIES":
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload,
                filterAllFilters: action.payload
            }

        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.payload
            }

        case "FILTER_BY_ACTIVITY":
            const activityToFilter = state.combineFilters ? state.countries : state.allCountries
            const filterCountries = activityToFilter.filter(country=> country.Activities?.some(activity => activity.name === action.payload))

            return {
                ...state,
                countries: filterCountries,

            };

        case "FILTER_BY_CONTINENT":
            const countriesToFilter = state.combineFilters ? state.countries : state.allCountries
            const filteredContinents = countriesToFilter.filter(country => country.continent === action.payload)
            return {
                ...state,
                countries: filteredContinents
            }


        case "ORDER_BY_NAME":
            const nameToFilter = state.combineFilters ? state.countries : state.allCountries
            const sortedCountries = [...nameToFilter]
            sortedCountries.sort(function (a, b) {

                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA > nameB) return action.payload === "Ascendente" ? 1 : -1;
                if (nameB > nameA) return action.payload === "Ascendente" ? -1 : 1;
                return 0;
            });
            return {
                ...state,
                countries: sortedCountries
            }


        case "FILTER_BY_POPULATION":
            const populationToFilter = state.combineFilters ? state.countries : state.allCountries
            const orderPopulation = [...populationToFilter]

            orderPopulation.sort(function (a, b) {
                const populationA = a.population
                const populationB = b.population
                if (populationA > populationB) return action.payload === "Ascendente" ? 1 : -1;
                if (populationB > populationA) return action.payload === "Ascendente" ? -1 : 1;
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
