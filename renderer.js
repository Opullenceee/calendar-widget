const DAYS = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
];

const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
];

const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const time = document.getElementById("time");
const ampm = document.getElementById("ampm");

const closeBtn = document.getElementById("close-btn");

function pad(number) {
    return String(number).padStart(2, "0");
}

function updateClock() {

    const now = new Date();

    // Date
    day.textContent = DAYS[now.getDay()];
    date.textContent = pad(now.getDate());
    month.textContent = MONTHS[now.getMonth()];
    year.textContent = now.getFullYear();

    // Time
    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    // Keep the colons visible at all times
    time.textContent = `${pad(hour)}:${pad(minute)}:${pad(second)}`;

    ampm.textContent = period;
}

// Initial update
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Close button
closeBtn.addEventListener("click", () => {
    window.electronAPI.closeWindow();
});