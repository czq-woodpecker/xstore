import {BASE_URL, getData, postData} from "./http";

export const addOrder = productId => postData(BASE_URL + '/orders', productId);

export const getOrders = () => getData(BASE_URL + '/orders');