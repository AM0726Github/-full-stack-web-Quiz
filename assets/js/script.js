// declaring variables by id of content
var quizHeader = document.getElementById('questionDisplay');
var quizParagraph = document.getElementById('explanation-paragraph');
var startQuizBtnEl = document.getElementById('start-quiz');
var containerDiv = document.getElementById('Container');

var score = 0;
var timeLeft = 100;

const myQuestions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: {
            a: "<javascript>",
            b: "<scripted>",
            c: "<script>"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose the correct JavaScript syntax to change the content of the following HTML code",
        answers: {
            a: "document.getElement([id]]).innerHTML='text';",
            b: "document.getElementById([id]]).innerHTML='text'",
            c: "document.getId([id]])='text'"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is the correct syntax to display 'Text' in an alert box using JavaScript?",
        answers: {
            a: "alertbox('Text')",
            b: "msgbox('Text')",
            c: "alert('Text')"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called “Script.js”",
        answers: {
            a: "<script src='Script.js'>",
            b: "<script href='Script.js'>",
            c: "<script name='Script.js'>"
        },
        correctAnswer: "a"
    },
    {
        question: "The external JavaScript file must contain <script> tag. True or False?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: {
            a: "throws",
            b: "program",
            c: "short"
        },
        correctAnswer: "b"
    },
    {
        question: "How is the function called in JavaScript?",
        answers: {
            a: "call functionName();",
            b: "functionName();",
            c: "function: functionName();"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct syntax for adding comments in JavaScript?",
        answers: {
            a: "<!–This is a comment–>",
            b: "//This is a comment ",
            c: "**This is a comment**"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the JavaScript syntax for printing values in Console?",
        answers: {
            a: "print(5);",
            b: "console.log(5);",
            c: "console.print(5);"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is the pop() method does?",
        answers: {
            a: "Display the first element",
            b: "Increments length by 1",
            c: "Decrements length by 1"
        },
        correctAnswer: "c"
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
