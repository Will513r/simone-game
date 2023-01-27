var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push("userChosenColor");
 });

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

   
 


