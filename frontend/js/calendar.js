import api from './APIClient.js';


// // TESTING
// const calendarbutton = document.querySelector('#calendarbutton');
// calendarbutton.addEventListener('click', e => {
//     // console.log("hi");
//     api.getCalendar().then(calendar => {
//         console.log(calendar);
//         calendar.forEach(event => {
            
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// });


const calendarSection = document.querySelector('section#calendar');

api.getCalendar().then(calendar => {
    console.log(calendar);
    calendar.forEach(event => {
        const div = document.createElement('div');
        const dateElement = document.createElement('h3');
        const textElement = document.createElement('h3');

        const startList = event.start.split("T"); // ["date", "start time"]
        const start = new Date(event.start);

        dateElement.textContent = start.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
        textElement.textContent = event.summary;

        // Create new div if the event is a timed event
        if (startList[1]) {
            const dateDiv = document.createElement('div');
            const timeElement = document.createElement('h4');
            
            timeElement.textContent = start.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });

            dateDiv.appendChild(dateElement);
            dateDiv.appendChild(timeElement);
            div.appendChild(dateDiv);
        } else {
            div.appendChild(dateElement);
        }
        
        div.appendChild(textElement);
        // div.classList.add();

        calendarSection.appendChild(div);
    });
}).catch(err => {
    console.log(err);
});