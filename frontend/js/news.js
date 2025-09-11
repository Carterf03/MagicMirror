import api from './APIClient.js';

// TESTING
// const newsbutton = document.querySelector('#newsbutton');
// newsbutton.addEventListener('click', e => {
//     api.getNewsStories("technology").then(stories => {
//         console.log(stories);
//     }).catch(err => {
//         console.log(err);
//     });
// });

// HTML Section for Events
const eventsSection = document.querySelector('section#events');
// API call to get top news stories for a specific category
api.getNewsStories("politics").then(stories => {
    // Creates a HTML div and p tag for the news headline
    // and adds it to the Event Section
    stories.forEach(story => {
        const div = document.createElement('div');
        const text = document.createElement('p');
        text.textContent = story.title;
        // div.classList.add();
        div.appendChild(text);
        eventsSection.appendChild(div);
    });
}).catch(err => {
    console.log(err);
});