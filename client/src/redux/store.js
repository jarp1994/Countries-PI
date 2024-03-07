import rootReducer from "./reducer";
import {createStore,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


//sin dev tools
 const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)))


    export default store