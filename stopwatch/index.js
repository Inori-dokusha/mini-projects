const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const digit1 = 0;
const digit2 = 0

let hour = 0;
let minute = 0;
let second = 0;

const timer = () => {
    second++;
    seconds.textContent = second;
    if (second === 60) {
        minute++;
        second = 0;
        minutes.textContent = minute;
    } else if (minute === 60) {
        hour++;
        minute = 0;
        hours.textContent = hour;
    }
};

setInterval(timer, 1000);
