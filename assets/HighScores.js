// variables

var HighScore = document.querySelector("#highscore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goback");

// clear score event
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});
// local storage retrieval
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
if(allScores !==null){

    for (var i = 0; i <allScores.length; i++){

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].intials + " " + allScores[i].score;
        HighScore.appendChild(createLi);
    }
}

// event to go back to index page
goBack.addEventListener("click", function (){
    window.location.replace("./index.html");
});