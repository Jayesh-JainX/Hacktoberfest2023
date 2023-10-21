const jokeButton = document.getElementById("joke-button");
const jokeText = document.getElementById("joke-text");

jokeButton.addEventListener("click", getJoke);

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            jokeText.innerText = data.setup + " " + data.punchline;
        });
}
