import {GET_ORDERS} from "../actions/actionType";

const initialValue = {
  orders: []
}
export function ordersReducer(state = initialValue, action) {
  if(action.type == GET_ORDERS) {
    return ({
      ...state,
      orders: action.payload
    })
  } else {
    return state;
  }
}