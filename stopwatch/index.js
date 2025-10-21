const time = document.querySelector(".timer");
time.textContent = "00:00:00";

const lapTimes = [];

let second = 0;
let minute = 0;
let hour = 0;

const timer = () => {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
    } else if (minute === 60) {
        hour++;
        minute = 0;
    } else if (hour === 24) {
        hour = 0;
    }

    time.textContent = convertToString();
};

function convertToString() {
    const strSecond = second.toString().padStart(2, "0");
    const strMinute = minute.toString().padStart(2, "0");
    const strHour = hour.toString().padStart(2, "0");
    return `${strHour}:${strMinute}:${strSecond}`;
}

const controls = document.querySelector(".controls");
controls.addEventListener("click", (event) => {
    const btnStar = event.target.matches(".btn-start");
    const btnStop = event.target.matches(".btn-stop");
    const btnReset = event.target.matches(".btn-reset");

    if (btnStar) {
        startTImer();
    } else if (btnStop) {
        stopTimer();
    } else if (btnReset) {
        resetTimer();
    }
});

let intervalID;

function startTImer() {
    intervalID = setInterval(timer, 1000);
}
9;

let lap = 0;
let timeStop = "";

function stopTimer() {
    clearInterval(intervalID);

    lap++;
    timeStop = convertToString();

    lapTimes.push({
        lap: lap,
        time: timeStop,
    });
    renderHtml();
}

function renderHtml() {
    let html = "";

    lapTimes.forEach((item) => {
        const lap = `
            <div class="lap-time">
                <span class="lap">Lap ${item.lap}</span>
                <span class="time">${item.time}</span>
            </div>
        `;

        html += lap;
    });

    document.querySelector(".lap-times").innerHTML = html;
}

function resetTimer() {
    second = 0;
    minute = 0;
    hour = 0;
    time.textContent = "00:00:00";
}

startTImer();
