import HTTPClient from './HTTPClient.js';

const BASE_API_PATH = './api';

// Calls HTTPClient to get news stories based off a category
const getNewsStories = (category) => {
    return HTTPClient.get(`${BASE_API_PATH}/newStories`);
};


export default {
    getNewsStories
};
