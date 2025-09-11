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

const eventsSection = document.querySelector('section#events');
api.getNewsStories("politics").then(stories => {
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