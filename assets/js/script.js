
let questions = [

    {

        question : "What does HTML stand for?",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"

    },{

        question : "What does JS stand for?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"

    }

];


var startBlockEl = document.querySelector("#startBlock");
var startBtnEl = document.querySelector("#startBtn");
var questionsEl = document.querySelector("#question-here");



var logTest = function(questions){
    console.log("hello btn clicked");
    var question1 = questions[0];
    createQuizBlock(question1);
};

var createQuizBlock = function(questionObj) {

    startBlockEl.remove();

    var q1 = questionObj.question;
    var cA = questionObj.choiceA;
    var cB = questionObj.choiceB;
    var cC = questionObj.choiceC;


    var questionDiv = document.createElement("h3");

    questionDiv.className = "questions";
    questionDiv.innerHTML = q1;

    var choices = document.createElement("ul");
    choices.className = "question-list";

    var keys = Object.keys(questionObj);
   
    keys.forEach((key) => {
        console.log(questionObj[key])
        
        var listItem = document.createElement("li");
        listItem.className ="listItem";
        listItem.innerHTML = questionObj[key];
        choices.appendChild(listItem);
    }
        );
    questionsEl.append(choices);
    //questionsEl.append(questionDiv);

};


startBtnEl.addEventListener("click",function(event){
    event.preventDefault();
    event.stopPropagation();
    logTest(questions);
});


//taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

// var actionContainerEl = document.createElement("div");
// actionContainerEl.className = "task-actions";

// // create edit button
// var editButtonEl = document.createElement("button");
// editButtonEl.textContent = "Edit";
// editButtonEl.className = "btn edit-btn";
// editButtonEl.setAttribute("data-task-id", taskId);
// actionContainerEl.appendChild(editButtonEl);