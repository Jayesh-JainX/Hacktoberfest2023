const objectImage = document.getElementById("objectImage");
const optionButtons = document.querySelectorAll(".option-button");
const objects = ["Teddy Bear", "Star", "Carrot", "Butterfly", "Balloon", "Book"];
let currentObject = "";

function selectRandomObject() {
    const randomIndex = Math.floor(Math.random() * objects.length);
    currentObject = objects[randomIndex];
    objectImage.src = `images/${currentObject.toLowerCase()}.jpg`;
}

function checkGuess(event) {
    const userGuess = event.target.textContent;
    if (userGuess === currentObject) {
        alert("Correct! You guessed the object.");
        selectRandomObject();
    } else {
        alert("Incorrect. Try again.");
    }
}

optionButtons.forEach(button => {
    button.addEventListener("click", checkGuess);
});

selectRandomObject();
