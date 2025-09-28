import api from './APIClient.js';

// const weatherbutton = document.querySelector('#weatherbutton');

// weatherbutton.addEventListener('click', e => {
//     api.getWeather().then(weather => {
//         console.log(weather);
//     }).catch(err => {
//         console.log(err);
//     });
// });


// HTML Section for Weather
const weatherSection = document.querySelector('section#weather');
// API call to get top news stories for a specific category
api.getWeather().then(weather => {
    console.log(weather);

    // stories.forEach(story => {
    //     const div = document.createElement('div');
    //     const text = document.createElement('p');
    //     text.textContent = story.title;
    //     // div.classList.add();
    //     div.appendChild(text);
    //     eventsSection.appendChild(div);
    // });
}).catch(err => {
    console.log(err);
});