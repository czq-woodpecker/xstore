import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {ordersReducer} from "./ordersReducer";

const reducers = combineReducers({
  productReducer,
  ordersReducer
});
export default reducers;
