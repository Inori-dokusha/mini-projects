document.querySelector("button").addEventListener("click", () => {
    const result = random(["r1", "g1", "b1", "r2", "g2", "b2"]);
    const convert = `#${result.join('')}`;
    document.querySelector("#color").innerHTML = convert;
    document.body.style.backgroundColor = convert;
});

const random = (colors) => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const result = [];
    for (let color of colors) {
        color = Math.trunc(Math.random() * 16);
        result.push(hex[color])
    }
    return result;
}