const coll = document.getElementsByClassName("faq-collapse");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

let j;

for(j = 0; j < 3; j++) {
    alert(j);
}

let guys = [stede, ed, buttons, frenchie, izzy, roach, jim];
let guysButtons = document.querySelectorAll("guys-button");

forEach(guysButton => {
    guysButton.addEventListener("click", function () {
        alert(guys);
    });
}
);