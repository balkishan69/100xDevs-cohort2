// *** 1) Create a counter in Javascript (counts down from 30 to 0)

// Initialize the countdown value
let countdownValue = 30;

// Function to update the countdown
function updateCountdown() {
    console.log(countdownValue); // Log the current countdown value to the console

    // Decrease the countdown value
    countdownValue--;

    // Check if the countdown has reached zero
    if (countdownValue < 0) {
        // Stop the countdown when it reaches zero
        clearInterval(countdownInterval);
        console.log("Time's up!"); // Log "Time's up!" to the console
    }
}

// Set an interval to update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the starting value
updateCountdown();



// *** 2) Calculate the time it takes between a setTimeout call and the inner function actually running

// Record the start time
const startTime = Date.now();

// Function to be called after the timeout
function runAfterTimeout() {
    // Record the end time
    const endTime = Date.now();

    // Calculate the time difference
    const timeDifference = endTime - startTime;

    // Log the time it took to the console
    console.log(`Time elapsed: ${timeDifference} ms`);
}

// Set the timeout (example: 2000 milliseconds = 2 seconds)
const timeoutDuration = 2000;
setTimeout(runAfterTimeout, timeoutDuration);



// *** 3) Create a terminal clock (HH:MM:SS)

const readline = require('readline');

// Function to format numbers to two digits
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Function to get the current time in HH:MM:SS format
function getCurrentTime() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

// Function to display the current time in the terminal
function displayClock() {
    const currentTime = getCurrentTime();
    console.clear();
    console.log(currentTime);
}

// Set an interval to update the clock every second
setInterval(displayClock, 1000);

// Initial call to display the starting time immediately
displayClock();


