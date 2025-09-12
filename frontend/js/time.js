import api from './APIClient.js';

// HTML Section for the Date and Time
const datetimeSection = document.querySelector('section#datetime');


// API Clock
// function updateTime() {
//     // API call to get top news stories for a specific category
//     api.getTime().then(datetime => {
//         // Clear pervious datetime content
//         datetimeSection.innerHTML = "";

//         // Date elements
//         const date = datetime.date.split("-"); // ["year", "month", "day"]

//         const h3 = document.createElement('h3');
//         // h3.textContent = datetime.day_of_week;
//         // h3.textContent += " - " + date[1];
//         // h3.textContent += "/" + date[2];
//         // h3.textContent += "/" + date[0];
//         h3.textContent = `${datetime.day_of_week} - ${date[1]}/${date[2]}/${date[0]}`;
//         datetimeSection.appendChild(h3);

//         // Time elements
//         const h1 = document.createElement('h1');
//         h1.textContent = datetime.time_12h;
//         datetimeSection.appendChild(h1);
//     }).catch(err => {
//         console.log(err);
//     });
// }


// // Update every second
// setInterval(updateTime, 1000);

// // Initial call
// updateTime();





// TESTING: Local Clock
function updateLocalClock() {
    const now = new Date();
    const weekday = now.toLocaleDateString('en-US', {
        weekday: 'long'
    });

    const datetimeSection = document.querySelector('section#datetime');
    datetimeSection.innerHTML = '';

    const h3 = document.createElement('h3');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    h3.textContent = `${weekday} - ${month}/${day}/${year}`;
    datetimeSection.appendChild(h3);

    // Time elements
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });
    const h1 = document.createElement('h1');
    h1.textContent = timeString;
    datetimeSection.appendChild(h1);
}

// Update every second
setInterval(updateLocalClock, 1000);

// Initial call
updateLocalClock();