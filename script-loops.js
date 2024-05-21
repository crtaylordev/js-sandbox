const basicButton = document.getElementById("basic-button");
let j;

basicButton.addEventListener("click", () => {
    for (j = 0; j < 3; j++) {
        alert(j);
    }
});

const guys = ["Stede", "Ed", "Buttons", "Frenchie", "Izzy", "Roach", "Jim"];
const genButton = document.getElementById("gen-button");

genButton.addEventListener("click", () => {
    for (const guy of guys) {
        alert(guy);
    }
});