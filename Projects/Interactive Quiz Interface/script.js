// Define quiz questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  
  // Function to initialize the quiz
  function initializeQuiz() {
    displayQuestion(currentQuestionIndex);
  }
  
  // Function to display a question
  function displayQuestion(index) {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.textContent = questions[index].question;
    choicesElement.innerHTML = "";
  
    questions[index].choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(choice));
      choicesElement.appendChild(button);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedChoice) {
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
  
    if (selectedChoice === questions[currentQuestionIndex].correctAnswer) {
      resultElement.textContent = "Correct! 🎉";
    } else {
      resultElement.textContent = "Oops! Try the next question.";
    }
  
    resultElement.style.display = "block";
    nextButton.style.display = "block";
  }
  
  // Function to proceed to the next question
  function nextQuestion() {
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
  
    resultElement.style.display = "none";
    nextButton.style.display = "none";
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      // Quiz has ended, you can add a completion message or redirect here
    }
  }
  
  // Initialize the quiz
  initializeQuiz();
  