import {postData} from "./http";

const BASE_URL = 'http://localhost:8080/api';
export const addProduct = (product) => postData(BASE_URL + '/product', product);
