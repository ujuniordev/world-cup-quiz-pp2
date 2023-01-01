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

startGameButton.addEventListener("click", startGame);

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


// function to count and display the number of questions
function questionsCounter() {
    // initiates the list passing 1 to the counter
    var questionList = '<ul>';
    let i = 1;
    questions.forEach(function (question) {
        // adds 1 to each interaction and display in a list
        questionList += '<li class="btn btn-light" id="question' + i + '">' + i + '</li>';
        i++;
    });
    // closes the tag and finishes by adding the html to the DOM
    questionList += '</ul>';
    questionCounter.innerHTML = questionList;
}


// function to display the next question as soon as the previous question is answered
function showNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
    }
    let currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;


    // Clear the container in case it's got buttons from the previous
    // round/question.
    choicesContainer.innerHTML = "";

    for (let choice of currentQuestion.choices) {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("answer-button", "btn", "btn-secondary");

        choiceButton.id = choice;

        choiceButton.addEventListener("click", checkAnswer);

        choicesContainer.appendChild(choiceButton);
    }
}

// function to check the correct answer the display if it is correct or not
function checkAnswer(event) {
    let clickedButton = event.currentTarget;

    let userAnswer = clickedButton.id;

    let currentQuestion = questions[currentQuestionIndex];
    let currentCounterOption = `question${currentQuestionIndex +1}`;

    let currentQuestionAnswer =
        currentQuestion.choices[currentQuestion.answerIndex];
    document.getElementById(currentCounterOption).classList.remove("btn-light");
    if (userAnswer === currentQuestionAnswer) {
        correctAnswers++;
        document.getElementById(currentCounterOption).classList.add("btn-success");
    } else {
        document.getElementById(currentCounterOption).classList.add("btn-danger");
    }

    // update this to point at the next question.
    // the shorthand for this is currentQuestionIndex + 1 or currentQuestionIndex++
    currentQuestionIndex = currentQuestionIndex + 1;
    showNextQuestion();
}

// function to display the score at the end of the game
function endGame() {
    // displays the score
    gameOverContainer.innerHTML = `<h2>You scored ${correctAnswers} out of ${questions.length}</h2>`;


    // Clean up the question and choices
    questionContainer.innerHTML = "";
    choicesContainer.innerHTML = "";
    questionCounter.innerHTML = "";

    startGameButton.textContent = "Play Again";
}