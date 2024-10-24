// Array of quiz questions, each containing the question text and an array of possible answers
// Each answer is an object with 'text' (answer text) and 'correct' (boolean to indicate if it is the correct answer).
const questions = [
    {
        question: "State the Characteristics of Negative Infinity",
        answers: [
            { text: "It is a constant", correct: true },
            { text: "It is variable", correct: false },
            { text: "It stated no other number is greater than this value", correct: false },
            { text: "Both a and c", correct: false },
        ]
    },
    {
        question: "State the Keyword Used to Declare Block-Scoped Variables in ES6",
        answers: [
            { text: "block", correct: false },
            { text: "var", correct: false },
            { text: "let", correct: true },
            { text: "const", correct: false },
        ]
    },
    {
        question: "Which of These is Used to Declare a Constant Data Type?",
        answers: [
            { text: "constant", correct: false },
            { text: "cons", correct: false },
            { text: "const", correct: true },
            { text: "cnst", correct: false },
        ]
    },
    {
        question: "What is the x = = = y Statement Interpreted as in JavaScript?",
        answers: [
            { text: "State that x and y have equal value", correct: false },
            { text: "State that x and y are not equal", correct: false },
            { text: "State that x and y are equal in type, value, and reference address", correct: true },
            { text: "State that x and y are equal in value and reference address only", correct: false },
        ]
    },
];

// Get references to the DOM elements for the question, answer buttons, and next button
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // Variable to track the current question index
let score = 0; // Variable to track the score of the user

// Function to start or restart the quiz
function startQuiz() {
    currentQuestionIndex = 0; // Reset the question index to the first question
    score = 0; // Reset the score to 0
    nextButton.innerHTML = "Next"; // Set the text for the next button
    showQuestion(); // Display the first question
}

// Function to display the current question and its answers
function showQuestion() {
    resetState(); // Clear the previous question and answer buttons

    // Get the current question from the 'questions' array
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; // Increment the question number for display
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question

    // Loop through each answer for the current question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a button for each answer
        button.innerHTML = answer.text; // Set the text of the button to the answer
        button.classList.add("btn"); // Add the 'btn' class to the button
        answerButtons.appendChild(button); // Add the button to the answer buttons container
        
        // If the answer is correct, add a custom 'correct' attribute
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Add a click event listener to handle when the user selects an answer
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the answer buttons and hide the 'Next' button
function resetState() {
    nextButton.style.display = "none"; // Hide the 'Next' button by default

    // Remove all the answer buttons from the previous question
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle the logic when an answer is selected by the user
function selectAnswer(e) {
    const selectedBtn = e.target; // Get the button that the user clicked
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct

    // If the answer is correct, add the 'correct' class and increment the score
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        // If the answer is incorrect, add the 'incorrect' class
        selectedBtn.classList.add("incorrect");
    }

    // Show the correct answer by highlighting all the correct answers
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        // Disable all answer buttons after selection
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show the 'Next' button after an answer is selected
}

// Function to display the user's final score
function showScore() {
    resetState(); // Clear the current question and answers
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Show the score to the user
    nextButton.innerHTML = "Play Again"; // Change the 'Next' button text to 'Play Again'
    nextButton.style.display = "block"; // Show the button
}

// Function to handle the 'Next' button click event
function handleNextButton() {
    currentQuestionIndex++; // Move to the next question

    // If there are more questions, show the next question
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Otherwise, show the user's final score
        showScore();
    }
}

// Add a click event listener to the 'Next' button to handle the logic for moving to the next question
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // If there are more questions, handle the next question
    } else {
        startQuiz(); // If no more questions, restart the quiz
    }
});

// Start the quiz when the page loads
startQuiz();
