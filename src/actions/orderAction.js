import {getOrders} from "../api/orders";
import {GET_ORDERS} from "./actionType";

export const getOrdersAction = () => (dispatch => {
  getOrders()
    .then(response => response.json())
    .then(orders => {
      dispatch({
        type: GET_ORDERS,
        payload: orders
      })
    })
})