import HTTPClient from './HTTPClient.js';

const BASE_API_PATH = 'http://localhost:5000'; // Flask default port

// Calls HTTPClient to get the time and date
const getTime = () => {
    return HTTPClient.get(`${BASE_API_PATH}/time`);
};

// Calls HTTPClient to get the weather
const getWeather = () => {
    return HTTPClient.get(`${BASE_API_PATH}/weather`);
};

// Calls HTTPClient to get news stories based off a category
const getNewsStories = (category) => {
    return HTTPClient.get(`${BASE_API_PATH}/newStories/${category}`);
};


export default {
    getTime,
    getWeather,
    getNewsStories
};
