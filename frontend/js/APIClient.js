import HTTPClient from './HTTPClient.js';

const BASE_API_PATH = './api';


// Example
const getCurrentUser = () => {
  return HTTPClient.get(`${BASE_API_PATH}/users/current`);
};




export default {
  getCurrentUser
};
