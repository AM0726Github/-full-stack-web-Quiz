// declaring variables by id of content
var quizHeader = document.getElementById('questionDisplay');
var quizParagraph = document.getElementById('explanation-paragraph');
var startQuizBtnEl = document.getElementById('start-quiz');
var containerDiv = document.getElementById('Container');

var score = 0;
var timeLeft = 100;

const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
    }
];

startQuizBtnEl.addEventListener("click", function() {

    startQuizBtnEl.style.display = 'none';
    quizHeader.style.display = 'none';
    quizParagraph.style.display = 'none';
    //
    score = 0; // Score is 0 again.
    timeLeft = 100;

    // variable to store our intervalID
    let nIntervId;

    function changetime() {
        // check if already an interval has been set up
        debugger;
        if (!nIntervId) {
          nIntervId = setInterval(changeText, 1000);
        }
    }

    function changeText() {
        var oElem = document.getElementById("timeLeft");
        timeLeft = parseInt(timeLeft) -  1;
        oElem.innerText = timeLeft;
    }

    changetime();
});
