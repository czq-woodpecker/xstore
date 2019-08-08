import {getProducts} from "../api/product";
import {GET_PRODUCTS} from "./actionType";

export const getProductsAction = () => (dispatch => {
  getProducts()
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      })
    })
})
