const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: "Mars",
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7"],
        answer: "7",
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        answer: "Blue Whale",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
        answer: "Carbon Dioxide",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Earth", "Jupiter"],
        answer: "Jupiter",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe"],
        answer: "Au",
    },
];

let currentQuestionIndex = 0;

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showNextQuestion();
        } else {
            endGame();
        }
    } else {
        alert("Sorry, that's not correct. Try again.");
    }
}

function showNextQuestion() {
    const questionElement = document.getElementById("question");
    const choices = document.getElementById("choices");
    questionElement.textContent = questions[currentQuestionIndex].question;
    
    // Clear previous options
    choices.innerHTML = "";
    
    // Add options for the current question
    questions[currentQuestionIndex].options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        choices.appendChild(button);
    });
}

function endGame() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Congratulations! You've completed Project Quest.</h2>
        <p>Thank you for participating in our onboarding game. You are now ready to explore our project.</p>
    `;
}

showNextQuestion();
