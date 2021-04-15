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
var questionsIndex = 0;

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
