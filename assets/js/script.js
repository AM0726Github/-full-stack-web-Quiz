let ResultContainer = document.querySelector('#result-container');
const QuestionContainer = document.querySelector('#question-container');
const ChoiseContainer = document.querySelector('#choice-container');
const AnswerContainer = document.querySelector('#answer-container');
const ShowScores = document.querySelector('#view-high-scores');

let CurrentQuest = 0;
let CurrentScore = 0;
let Scores = [];
var TimeInterval; 

const myQuestions = [
    // {
    //     question: "What is the HTML tag under which one can write the JavaScript code?",
    //     answers: [
    //         "javascript",
    //         "scripted",
    //         "script"
    //     ],
    //     correctAnswer: "script"
    // },
    // {
    //     question: "Choose the correct JavaScript syntax to change the content of the following HTML code",
    //     answers: [
    //         "document.getElement([id]]).innerHTML='text'",
    //         "document.getElementById([id]]).innerHTML='text'",
    //         "document.getId([id]])='text'"
    //     ],
    //     correctAnswer: "document.getElementById([id]]).innerHTML='text'"
    // },
    // {
    //     question: "Which of the following is the correct syntax to display 'Text' in an alert box using JavaScript?",
    //     answers: [
    //         "alertbox('Text')",
    //         "msgbox('Text')",
    //         "alert('Text')"
    //     ],
    //     correctAnswer: "alert('Text')"
    // },
    // {
    //     question: "What is the correct syntax for referring to an external script called “Script.js”",
    //     answers: [
    //         "script src='Script.js'",
    //         "script href='Script.js'",
    //         "script name='Script.js'"
    //     ],
    //     correctAnswer: "ascript src='Script.js'"
    // },
    // {
    //     question: "The external JavaScript file must contain <script> tag. True or False?",
    //     answers: [
    //         "True",
    //         "False"
    //     ],
    //     correctAnswer: "False"
    // },
    // {
    //     question: "Which of the following is not a reserved word in JavaScript?",
    //     answers: [
    //         "throws",
    //         "program",
    //         "short"
    //     ],
    //     correctAnswer: "program"
    // },
    // {
    //     question: "How is the function called in JavaScript?",
    //     answers: [
    //         "call functionName();",
    //         "functionName();",
    //         "function: functionName();"
    //     ],
    //     correctAnswer: "functionName()"
    // },
    // {
    //     question: "What is the correct syntax for adding comments in JavaScript?",
    //     answers: [
    //         "!This is a comment",
    //         "//This is a comment",
    //         "**This is a comment**"
    //     ],
    //     correctAnswer: "//This is a comment"
    // },
    {
        question: "What is the JavaScript syntax for printing values in Console?",
        answers: [
            "print(5);",
            "console.log(5);",
            "console.print(5);"
        ],
        correctAnswer: "bconsole.log(5);"
    },
    {
        question: "Which of the following is the pop() method does?",
        answers: [
            "Display the first element",
            "Increments length by 1",
            "Decrements length by 1"
        ],
        correctAnswer: "Decrements length by 1"
    }
];

function QuizStart(){
    document.getElementById('btn').style.visibility = "hidden";
    Timer(myQuestions.length*2);
    return GoQuestions();
};

function GoQuestions() {
    if (CurrentQuest === myQuestions.length) {
        QuizFinito();
    } else {
        QuestionContainer.innerHTML = '';
        ChoiseContainer.innerHTML = '';
        let QuestionHeader = document.createElement('h5');
        QuestionHeader.className = 'questionDisplay explanation-paragraph';
        QuestionHeader.innerHTML = myQuestions[CurrentQuest].question;
        QuestionContainer.appendChild(QuestionHeader);

        for (let i = 0; i < myQuestions[CurrentQuest].answers.length; i++) {
            var AnswerBtns = document.createElement('button');
            AnswerBtns.innerHTML = '';
            AnswerBtns.className = 'btn-quiz edit-btn submit';
            AnswerBtns.innerHTML = myQuestions[CurrentQuest].answers[i];
            ChoiseContainer.appendChild(AnswerBtns);
            AnswerBtns.onclick = function() {
                if (this.textContent !== myQuestions[CurrentQuest].correctAnswer) {
                    this.style.backgroundColor = '#DF5E6B';
                    setTimeout(ThenQuest,500);
                } else {
                    CurrentScore = CurrentScore + 1;
                    this.style.backgroundColor = '#FFFF00';
                    setTimeout(ThenQuest,500);
                }
            };
        };
    };
};

function ThenQuest() {
    ++CurrentQuest;
    GoQuestions(); 
};

function QuizFinito() {
    clearInterval(TimeInterval);
    QuestionContainer.innerHTML = '';
    ChoiseContainer.innerHTML = '';
    let RetakeBtn = document.createElement('button');
    let SaveScoreBtn = document.createElement('button');
    let InitialInput = document.createElement('input');
    let ResultCont = document.createElement('div'); 
    InitialInput.setAttribute("placeholder", "Name here...");
    InitialInput.className = 'submit';
    SaveScoreBtn.className = 'btn edit-btn submit';
    SaveScoreBtn.innerHTML = 'Save Result';
    RetakeBtn.className = 'btn edit-btn submit';
    RetakeBtn.id = "ReQuizButton";
    RetakeBtn.innerHTML = 'Retake Quiz';
    ResultCont.className = 'explanation-paragraph page-content';
    ResultCont.id = "Container";
    ResultCont.innerHTML = `You got ${CurrentScore} out of ${myQuestions.length} questions correct!`;
    if(CurrentScore == myQuestions.length) {
        ResultContainer.appendChild(ResultCont);
        ResultContainer.appendChild(InitialInput);
        ResultContainer.appendChild(SaveScoreBtn);
        ResultContainer.appendChild(RetakeBtn); 
    } else {
        ResultContainer.appendChild(ResultCont);
        ResultContainer.appendChild(InitialInput);
        ResultContainer.appendChild(SaveScoreBtn);
        ResultContainer.appendChild(RetakeBtn);   
    };
    SaveScoreBtn.addEventListener("click", function(){
       var Scoreobj = {
           Initial: InitialInput.value,
           Score: CurrentScore,
           Time: document.getElementById("timeLeft").textContent
       }; 
       Scores.push(Scoreobj);
       localStorage.setItem("Scores", JSON.stringify(Scores));
       confirm("Your result has been saved. Thank you for taking my quiz!")
    });  
};

document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'ReQuizButton'){
        ReloadQuize();
     }
});

function ReloadQuize(){
    window.location.reload();
};


function Timer(minutes) {
    var seconds = 60;
    var mins = minutes;
    function Phase() {
        var counter = document.getElementById("timeLeft");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML = `<span>${current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)}</span>`;
        counter.className = 'btn btn-dark';
        if( seconds > 0 ) {
            TimeInterval = setTimeout(Phase, 1000);
        } else {
            if(mins > 1){
                Timer(mins-1);           
            };
        };
    };
    Phase();
};

ShowScores.addEventListener("click", function(){
    let InitialNameScore = localStorage.getItem("Scores");
    if (!InitialNameScore) {
        window.alert("Ther is not scores Yet! First Pass The Quiz !");
    }
    else {
        InitialNameScore = JSON.parse(InitialNameScore);
        window.alert("Name " + InitialNameScore[InitialNameScore.length-1].Initial + " Score " + InitialNameScore[InitialNameScore.length-1].Score + " Time " + InitialNameScore[InitialNameScore.length-1].Time);
    };
 });