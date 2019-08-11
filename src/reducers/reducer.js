import {GET_ORDERS, GET_PRODUCTS} from "../actions/actionType";

const initialValue = {
  products: [],
  orders: []
}
export function reducer(state = initialValue, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }; break;
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      }; break;
    default: return state;
  }
}