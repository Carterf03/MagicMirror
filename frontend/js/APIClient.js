import HTTPClient from './HTTPClient.js';

const BASE_API_PATH = 'http://localhost:5000'; // Flask default port

// Calls HTTPClient to get news stories based off a category
const getNewsStories = (category) => {
    return HTTPClient.get(`${BASE_API_PATH}/newStories/${category}`);
};


export default {
    getNewsStories
};
