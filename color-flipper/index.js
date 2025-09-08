let value = document.querySelector("#color");
value.textContent = "#FFFFFF";
document.body.style.backgroundColor = "#FFFFFF";

document.querySelector(".random").addEventListener("click", () => {
    const color = generateRandomColor();
    value.textContent = color;
    document.body.style.backgroundColor = color
});

document.querySelector(".copy").addEventListener("click", () => {
    const text = document.querySelector("#color").textContent;
    navigator.clipboard.writeText(text);
    const alertElement = document.querySelector(".alert");
    alertElement.classList.add('on');
    setTimeout(() => {
        alertElement.classList.remove("on")
    }, 1000);
});

function generateRandomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colorString = "#";
    for (var i = 0; i < 6; i++) {
        const getNum = Math.trunc(Math.random() * 16);
        const result = hex[getNum];
        colorString += result;
    }
    return colorString;
}