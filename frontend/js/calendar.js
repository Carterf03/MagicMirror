import api from './APIClient.js';

const calendarbutton = document.querySelector('#calendarbutton');
const calendarSection = document.querySelector('section#calendar');

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

api.getCalendar().then(calendar => {
    console.log(calendar);
    calendar.forEach(event => {
        const div = document.createElement('div');
        const dateElement = document.createElement('h3');
        const textElement = document.createElement('h3');

        const startList = event.start.split("T"); // ["date", "start time"]
        const start = new Date(event.start);

        // dateElement.textContent = formatDate(start[0]);
        dateElement.textContent = start.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
        textElement.textContent = event.summary;

        if (startList[1]) {
            const dateDiv = document.createElement('div');
            const timeElement = document.createElement('h4');
            
            // timeElement.textContent = formatTime(start[1]);
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


function formatDate(eventDate) {
    // const date = eventDate.split("-"); // ["year", "month", "day"]
    // return `${date[1]}/${date[2]}/${date[0]}`;
    const formattedDate = start.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });
}

function formatTime(startTime) {
    // const time = startTime.split("-"); // ["start time", "timezone offset"]

    const time = startTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}