const basicButton = document.getElementById("basic-button");
let j;

basicButton.addEventListener("click", () => {
    for (j = 10; j > 0; j--) {
        alert(j);
    }
    alert('YOU GOTTA!');
});