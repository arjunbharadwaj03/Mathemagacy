const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const scoreButton = document.getElementById("score-btn");
const scoreText = document.getElementById("score-text");
const goBack = document.getElementById("back");
const container = document.getElementById("container");
const questionContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let score = 0;
container.classList.remove("animate");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add("hide");
    scoreText.classList.add("hide");
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.classList.add("animate-btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        container.classList.add("animate");
        setTimeout(() => {
            container.classList.remove("animate");
        }, 2000);
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    if (setStatusClass(document.body, correct)) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
        button.classList.remove("animate-btn");
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        scoreButton.classList.remove("hide");
        scoreButton.addEventListener("click", () => {
            questionContainerElement.classList.add("hide");
            scoreButton.classList.add("hide");
            clearStatusClass(document.body);
            scoreText.classList.remove("hide");
            startButton.classList.remove("hide");
            scoreText.innerText = `Your Score is ${score} / ${
                questions.length
            } or ${(score * 100) / questions.length}%`;
            startButton.innerText = "Restart";
        });
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
        return true;
    } else {
        element.classList.add("wrong");
        return false;
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        question: "What is 10 + 20",
        answers: [
            { text: "30", correct: true },
            { text: "1020", correct: false },
        ],
    },
    {
        question: "What is 112 + 35",
        answers: [
            { text: "137", correct: false },
            { text: "147", correct: true },
        ],
    },
    {
        question: "What is 0.09 + 20.03",
        answers: [
            { text: "20.12", correct: true },
            { text: "20.2", correct: false },
        ],
    },
    {
        question: "What is 10 + 20 + 32",
        answers: [
            { text: "62", correct: true },
            { text: "72", correct: false },
        ],
    },
    {
        question: "What is 10 - 20 + 10 * 2",
        answers: [
            { text: "0", correct: false },
            { text: "10", correct: true },
        ],
    },
];
