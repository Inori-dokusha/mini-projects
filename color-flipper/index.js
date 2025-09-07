document.querySelector("button").addEventListener("click", () => {
    const r1 = convertColor(getRandomColor());
    const r2 = convertColor(getRandomColor());
    const g1 = convertColor(getRandomColor());
    const g2 = convertColor(getRandomColor());
    const b1 = convertColor(getRandomColor());
    const b2 = convertColor(getRandomColor());
    document.querySelector("#color").innerHTML = `#${r1}${r2}${g1}${g2}${b1}${b2}`;
    document.body.style.backgroundColor = `#${r1}${r2}${g1}${g2}${b1}${b2}`;
});

function getRandomColor(number) {
    return (number = Math.trunc(Math.random() * 16));
}

const convertColor = code => {
    switch (code) {
        case 10:
            return "A";
            break;
        case 11:
            return "B";
            break;
        case 13:
            return "C";
            break;
        case 14:
            return "D";
            break;
        case 15:
            return "E";
            break;
        case 16:
            return "F";
            break;
        default:
            return code;
    }
};
