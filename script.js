// ------ importing helper functions from a module
import { calculateSign } from "./helpers.js";

// ------ dom form variables
const birthdayForm = document.getElementById('birthday-form');

//global variables here?
let sign = '';

// Getting the birthday
birthdayForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let birthMonth = document.getElementById('birth-month').value;
    let birthDay = document.getElementById('birth-day').value;

    //get and display the sign here
    const displaySign = document.getElementById('astrological-sign');
    displaySign.textContent = calculateSign(birthMonth, birthDay)
})


//call the api here to figure out astrology sign right?
    //save the horoscope into a variable