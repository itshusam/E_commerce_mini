import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const createCustomer = (data) => axios.post(`${API_URL}/customers`, data);
export const updateCustomer = (id, data) => axios.put(`${API_URL}/customers/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/customers/${id}`);

export const getProducts = () => axios.get(`${API_URL}/products`);
export const createProduct = (data) => axios.post(`${API_URL}/products`, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

export const placeOrder = (data) => axios.post(`${API_URL}/orders`, data);
