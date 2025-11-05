import api from './APIClient.js';


// HTML Section for Weather
const weatherSection = document.querySelector('section#weather');

// API call to get the weather for the week
api.getWeather().then(weather => {
    // Creates a HTML div for each day
    // and adds it to the Weather Section.
    weather.forEach((day, index) => {
        const div = document.createElement('div');

        // If it is the current day it will create
        // an img tag for the weather icon and h1 tag for the temp.
        if (index == 0) {
            div.classList.add('first-day');
            const icon = document.createElement('img');
            const temp = document.createElement('h1');

            icon.src = `./icons/${getWeatherIcon(day.forecast)}`;
            temp.textContent = day.temp;

            div.appendChild(icon);
            div.appendChild(temp);
        }
        // Otherwise, it will create two p tags for the day of the week and temp.
        else {
            const text = document.createElement('p');
            const temp = document.createElement('p');
            
            text.textContent = day.period;
            temp.textContent = day.temp;

            div.appendChild(text);
            div.appendChild(temp);
        }

        weatherSection.appendChild(div);
    });
}).catch(err => {
    console.log(err);
});


// Function to choose the correct icon based on the forecast of the day.
// Icons from https://www.iconsdb.com/black-icons/black-weather-icons.html
function getWeatherIcon(forecast) {
    const lower = forecast.toLowerCase();

    if (lower.includes("rain")) return "rain-64.jpg";
    if (lower.includes("thunderstorm")) return "storm-64.jpg";
    if (lower.includes("snow")) return "snow-64.jpg";
    if (lower.includes("cloudy")) return "clouds-64.jpg";
    if (lower.includes("partly sunny")) return "partly-cloudy-day-64.jpg";
    if (lower.includes("sunny")) return "sun-64.jpg";

    return "sun-64.jpg"; // fallback icon sun for now
}