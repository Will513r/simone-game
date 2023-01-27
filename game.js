var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];
 
// var randomChosenColor = buttonColors[randomNumber];
// var randomNumber = Math.floor(Math.random() * 4);
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];


    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();



      }
   
 

//  $("#" + randomChosenColor).click(function ()
