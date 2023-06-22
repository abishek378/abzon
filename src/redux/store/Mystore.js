import {createStore,combineReducers} from "redux"
import { myreducers,reducer2 } from"../reducers/Reducers"



// Combine reducers
const rootReducer = combineReducers({
    myreducers,
    reducer2,
  });
  
  // Create Redux store
  const Store = createStore(rootReducer);
  
  // Use the store in your application
  // ...
  
  export default Store;