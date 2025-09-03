import api from './APIClient.js';

const newsbutton = document.querySelector('#newsbutton');
newsbutton.addEventListener('click', e => {
    api.getNewsStories("technology").then(stories => {
        // TODO
    }).catch(err => {
        console.log(err);
    })
});