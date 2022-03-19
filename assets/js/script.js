//Get elements here
const startButton = document.getElementById('start-btn');
const questionConEl = document.getElementById('question-container');
const questionEL = document.getElementById('question');
const answerBtnEl = document.getElementById('answers-buttons');

let score = 0;
let shuffledQ = "";
let currentQIndex = "";
// questions stored in this array
const questions = [
    {
        question: "Javascript is an _______ language?",
        answers: [
            { text: "Object-Oriented", correct: true},
            { text: "Object-Based", correct: false},
            { text: "Procedural", correct: false},
            { text: "None of the above", correct: false}
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            { text: "var", correct: false},
            { text: "let", correct: false},
            { text: "Both var and let", correct: true},
            { text: "None of the above", correct: false}
        ]
    }
]
// event lister to start game on click
startButton.addEventListener("click", startGame)


// start game function
function startGame(){
    console.log("start btn clicked");
    startButton.classList.add("hide");
    // get random number < 0 or > 0
    shuffledQ = questions.sort(() => Math.random() - .5);
    currentQIndex = 0;
    // after start btn is clicked show question area
    questionConEl.classList.remove('hide');
    setNextQuestion();
};

function setNextQuestion(){
    console.log(shuffledQ); // testing remove later
    resetState();
    // pass random question to show question function
    showQuestion(shuffledQ[currentQIndex]);
};

function showQuestion(question){
    questionEL.innerText = question.question;
    // loop in answer array, create button for each, set inner text to button
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn') 
        // check if answer is correct
        if(answer.correct){
            // if true set data set to button
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button);
    });

};

function selectAnswer(){
    console.log("in selectAnswer")

};

function resetState(){
    
}