import api from './APIClient.js';

const newsbutton = document.querySelector('#newsbutton');
newsbutton.addEventListener('click', e => {
    api.getNewsStories("technology").then(stories => {
        console.log(stories);
    }).catch(err => {
        console.log(err);
    });
});