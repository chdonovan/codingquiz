// array variable for questions
var quesitons = [
    
    {   
        title: "",
        choices:[""],
        answer: "",
    },
    {   
        title: "",
        choices:[""],
        answer: "",
    },
    {   
        title: "",
        choices:[""],
        answer: "",
    },
    {   
        title: "",
        choices:[""],
        answer: "",
    },
    {   
        title: "",
        choices:[""],
        answer: "",
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
                clearInterval{intervalHold;
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
        questionsHere..textContent = userQuestion;
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

