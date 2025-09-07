let count = 0;
const value = document.querySelector("#value");

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
        const getBtn = e.target;
        if (getBtn.textContent === "Decrease") {
            count--;
        } else if (getBtn.textContent === "Increase") {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0 ) {
            value.style.color="red"
        } else {
            value.style.color = "black"
        }
    });
});
