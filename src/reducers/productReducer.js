import {GET_PRODUCTS} from "../actions/actionType";

const initialValue = {
  products: []
}
export function productReducer(state = initialValue, action) {
  if(action.type == GET_PRODUCTS) {
    return{
      ...state,
      products: action.payload
    }
  } else {
    return state;
  }
}