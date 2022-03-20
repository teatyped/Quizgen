//Get elements here
const startButton = document.getElementById('start-btn');
const questionConEl = document.getElementById('question-container');
const questionEL = document.getElementById('question');
const answerBtnEl = document.getElementById('answers-buttons');
const nextButton = document.getElementById('next-btn');
var timerEl = document.getElementById('countdown');

let score = 0;
let shuffledQ = "";
let currentQIndex = "";
var timeLeft = 10;


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
// event lister to start game on click and start timer
startButton.addEventListener("click", () =>{
    startGame();
    startTimer();
})
nextButton.addEventListener("click", () =>{
    currentQIndex++;
    setNextQuestion();
    // reset timer to 10 and call again on next question
    timeLeft = 10;
    startTimer();
})


function startTimer(){
    var intervalId = setInterval(function(){
        if (timeLeft >=1){
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }else if(timeLeft === 0){
            timerEl.textContent = "";
            clearInterval(intervalId)
        }
    }, 1000);
};




// start game function
function startGame(){

    //startTimer();

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
        button.classList.add('btn') ;
        // check if answer is correct
        if(answer.correct){
            // if true set data set to button
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
    });

};

// selectAnswer takes in click event, pulls target event,
function selectAnswer(event){
    const selectedBtn = event.target ;
    console.log(selectedBtn);
    const correct = selectedBtn.dataset.correct;
   // setStatusClass(document.body, correct);
    Array.from(answerBtnEl.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    // check to see if more questions are in the array
    if (shuffledQ.length > currentQIndex + 1){
        nextButton.classList.remove('hide');
    }else{
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }


};
// function will add the correct/wrong class to element to change css, red is wrong blue is right
function setStatusClass(element, correct) {  
    clearStatusClass(element, correct);
    if (correct){
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong')

    }
};

// clear status class in the element if anything
function clearStatusClass(element) {  
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


// removes the default place holders, also hide next-btn
function resetState(){
    nextButton.classList.add('hide');
    while (answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }

}