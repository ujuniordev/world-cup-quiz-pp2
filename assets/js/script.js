// defining the questions and passing the correct answer via index

const questions = [{
        question: "When did the first World Cup edition happen?",
        choices: ["1930", "1936", "1935", "1932"],

        answerIndex: 0,
    },
    {
        question: "In which country did the first World Cup happen?",
        choices: ["Germany", "Brazil", "England", "Uruguay"],
        answerIndex: 3,
    },
    {
        question: "As of 2022, which country has the most World Cup wins?",
        choices: ["Italy", "France", "Brazil", "Germany"],
        answerIndex: 2,
    },
    {
        question: "Which country won the first World Cup?",
        choices: ["Italy", "Uruguay", "Germany", "Brazil"],
        answerIndex: 1,
    },
    {
        question: "In which year did England host the World Cup?",
        choices: ["1966", "1994", "1970", "1986"],
        answerIndex: 0,
    },
];

// declare the variables
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const questionCounter = document.getElementById("question-counter");
const startGameButton = document.getElementById("start-game-button");
const gameOverContainer = document.getElementById("game-over-container");

// declare these without a value. Will initialize the value in startGame()
let currentQuestionIndex;
let correctAnswers;


// function start game that calls the questions counter and show next question functions
function startGame(event) {
    // Reset this and everything else that needs to be reset at the start of the game
    currentQuestionIndex = 0;
    correctAnswers = 0;

    questionsCounter();
    showNextQuestion();
    gameOverContainer.innerHTML = "";

    startGameButton.textContent = "Restart Game";
}