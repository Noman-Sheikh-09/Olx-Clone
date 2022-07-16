import { combineReducers } from "redux";
import ProductReducers from "./reducers/ProductReducers";
import { AuthReducer } from "./reducers/AuthReducer";
const RootReducer=combineReducers({
 AuthReducer,
 ProductReducers

})

export default RootReducer;
