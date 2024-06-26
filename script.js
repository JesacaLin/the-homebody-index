// ------ importing helper functions from separate modules
import { calculateSign } from "./helpers.js";
import { fetchHoroscope } from "./api.js";
import { fetchWeather } from "./api.js";

// ------ dom form variables
const birthdayForm = document.getElementById('birthday-form');
const weatherForm = document.getElementById('weather-form');


//--------------------BIRTHDAY--------------------

// Getting the birthday from the user.
birthdayForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    let birthMonth = document.getElementById('birth-month').value;
    let birthDay = document.getElementById('birth-day').value;

    //get and display the sign.
    const displaySign = document.getElementById('astrological-sign');
    let sign = calculateSign(birthMonth, birthDay);
    displaySign.textContent = `Your sign is ${sign}`;

    //call the api for horoscope. Horoscope might have to be global for Analysis to have access.
    const horoscope = await fetchHoroscope(sign);
    if (horoscope.startsWith('HTTP error')) {
       // Display the error message to the user
       document.getElementById('horoscope-result').textContent = 'An error occurred while fetching the horoscope. Please try again later.';
   } else {
       document.getElementById('horoscope-result').textContent = horoscope;
   }
})

//--------------------WEATHER--------------------

//toggle
// document.getElementById(degreeToggle).addEventListener('change', function() {
//     document.getElementById('degreeLabel').innerText = this.checked ? 'C' : 'F';
// });

weatherForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    let location = document.getElementById('location').value;

    //call the weather api.
    const weather = await fetchWeather(location);
    if (typeof weather == 'string' && weather.startsWith('HTTP error')) {
        // Display the error message to the user
        document.getElementById('weather-forecast').textContent = 'An error occurred while fetching the weather. Please try again later or try entering another format.';
    } else {
        document.getElementById('weather-forecast').textContent = JSON.stringify(weather, null, 2);
        // document.getElementById('weather-forecast').textContent = weather;
    }
})