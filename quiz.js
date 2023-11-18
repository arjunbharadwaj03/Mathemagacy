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
    questionElement.innerText = `${currentQuestionIndex + 1}. ${
        question.question
    }`;
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
        question:
            "What foundation concept did Brahmagupta recognise and define?",
        answers: [
            { text: "Zero as a numerical value", correct: true },
            { text: "Imaginary numbers", correct: false },
        ],
    },
    {
        question: "Where was Brahmagupta born?",
        answers: [
            { text: "Varanasi", correct: false },
            { text: "Bhinmal", correct: true },
        ],
    },
    {
        question:
            "What is one of C.R. Rao's most notable contributions to the theory of estimation?",
        answers: [
            { text: "Cramér–Rao inequality", correct: true },
            { text: "Rao-Blackwell theorem", correct: false },
        ],
    },
    {
        question:
            "What earned Shakuntala Devi a place in the 1982 edition of The Guinness Book of World Records?",
        answers: [
            {
                text: "Multiplying 2 13 digit No",
                correct: true,
            },
            { text: "Solving complex problems", correct: false },
        ],
    },
    {
        question:
            "What was the primary focus of Bhaskara I's work, Mahabhaskariya?",
        answers: [
            { text: "Geometric theorems", correct: false },
            { text: "Indeterminate equations", correct: true },
        ],
    },
    {
        question: "What was Shakuntala Devi's nickname?",
        answers: [
            { text: "The Human Calculator", correct: false },
            { text: "The Human Computer", correct: true },
        ],
    },
    {
        question: "What was Aryabhata's main field of study?",
        answers: [
            { text: "Astronomy", correct: false },
            { text: "Mathematics", correct: true },
        ],
    },
    {
        question: "Where was Srinivasa Ramanujan born?",
        answers: [
            { text: "Erode", correct: true },
            { text: "Chennai", correct: false },
        ],
    },
    {
        question: "What was Ramanujan's self-taught mathematical specialty??",
        answers: [
            { text: "Number Theory", correct: true },
            { text: "Geometry", correct: false },
        ],
    },
    {
        question: "What is the name of Aryabhata's famous book?",
        answers: [
            { text: "Arya Granth", correct: false },
            { text: "Aryabhatiya", correct: true },
        ],
    },
];
