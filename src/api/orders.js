import {BASE_URL, postData} from "./http";

export const addOrder = productId => postData(BASE_URL + '/orders', productId)
