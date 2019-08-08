import {getData, postData} from "./http";

const BASE_URL = 'http://localhost:8080/api';
export const BASE_STATIC_URL = 'http://localhost:8080';
export const addProduct = (product) => postData(BASE_URL + '/products', product);

export const getProducts = () => getData(BASE_URL + '/products');
