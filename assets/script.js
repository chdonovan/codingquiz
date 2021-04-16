// array variable for questions
var questions = [
    
    {   
        title: "The condition in an if /else statement is enclosed with what?",
        choices:["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {   
        title: "Arrays in Javascript can be used to store what?",
        choices:["numbers and strings" , "other arrays", "booleans" , "all of these"],
        answer: "all of these",
    },
    {   
        title: "A very useful tool used during development and debugging is which of the following?",
        choices:["terminal", "for loops", "Javascript", "console log"],
        answer: "console log",
    },
    {   
        title: "String Values must b eenclosed with ____ when being assigned to variables.",
        choices:["commas", "curly brackets" , "quotes" , "parentheses"],
        answer: "quotes",
    },
    {   
        title: "commonly used data types do NOT include:",
        choices:["strings"," booleans", "alerts", "numbers" ],
        answer: "alerts",
    },
];

// vaiables for score and questions

var score = 0;
var questionIndex = 0;

// start of woring code

var thisIsTimer = document.querySelector("#thisIsTimer");
var timer = document.querySelector("#startTime");
var questionsHere = document.querySelector("#questionsHere");
var wrapper = document.querySelector("#wrapper");


// Seconds left is 15 seconds per question

var secondsLeft = 76

// Holds interval time
var intervalHold = 0;
// penalty
var penalty = 8;
// new element
var ulCreate= document.createElement("ul");


//Triggers timer, shows user time
timer.addEventListener("click",function(){
    if(intervalHold === 0){
        intervalHold = setInterval(function(){
            secondsLeft --;
            thisIsTimer.textContent = "TIME:  " + secondsLeft;

            if(secondsLeft <=0){
                clearInterval(intervalHold);
                allDone();
                thisIsTimer.textContent = "TIME HAS EXPIRED";
            
            }

        } ,1000);
    }
    render(questionsIndex);
});

// QUESTIONS ANF CHOICES WRITTEN TO PAGE
function render(questionsIndex){
    //clears existing
    questionsHere.innerHTML = "";
    ulCreate.innerHTML = "";
    //loops info to array
    for (var i = 0; i <quesitons.length; i++){
        //appends questions
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsHere.textContent = userQuestion;
    }
    //New questions choice
    userChoices.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsHere.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// event compare
function compare(event){
    var element = event.target;

    if (element.matches("li")){
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // correct
        if (element.textContent == quesitons[questionIndex].answer) {
            score ++;
            createDiv.textContent = "Nice! The correct answer is: " + questions[questionIndex].answer;

            //WRONG
        } else { 
            //deducts 5 seconds off secondsLeft for wrong answer
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "NOPE! the right answer is " + questions[questionIndex].answer;

        }
    }
    //question number
    questionIndex++;

    if (questionIndex >= questions.length){
        // All done will append stat page
        allDone();
        createDiv.textContent = "Quiz is over" + " " + "you got  " + score + "/" + questions/length + "Correct";
    } else {
        render(questionIndex);
                
    }
    questionsHere.appendChild(createDiv);
}
// functions to append last page
function allDone() {
    questionsHere.innerHTML= "" ;
    thisIsTimer.innerHTML = "" ;

    //heading
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "FINISHED!"

    questionsHere.appendChild(createH1);

    //paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsHere.appendChild(createP);

    // remaining time replaced with score
    if (secondsLeft >=0) {
        var timeRemaining= secondsLeft;
        var createP2 = document
        clearInterval(intervalHold);
        createP.textContent = "Your score is:  " + timeRemaining;

        questionsHere.appendChild(createP2);
    }

    ///// Label for initails
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter Initials:  ";

    questionsHere.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type","text");
    createInput.setAttribute("id","initials");
    createInput.textContent = "";

    questionsHere.appendChild(createInput);
    

    // creates submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id" , "submit");
    createSubmit.textContent = "";

    questionsHere.appendChild(createInput);

    // event listener for score and initials local storage// capture
    createSubmit.addEventListener("click", function(){
        var initials = createInput.value;

        if (initials === null){
            console.log("NO VALUE");

        }
        else {
            var finalScore = {
                initials : initials,
                Score : timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null){
                allScores = [];
            }
            else{
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newsScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newsScore);
            // Final page placement
            window.location.replace("./HighScores.html");
        }
    });

    
}    
