import {BASE_URL, getData, postData} from "./http";

export const addProduct = (product) => postData(BASE_URL + '/products', product);

export const getProducts = () => getData(BASE_URL + '/products');

