import {BASE_URL, deleteData, getData, postData} from "./http";

export const addOrder = productId => postData(BASE_URL + '/orders', productId);

export const getOrders = () => getData(BASE_URL + '/orders');

export const deleteOrder = orderId => deleteData(BASE_URL + '/orders/' + orderId);