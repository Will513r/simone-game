var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push("userChosenColor");
   
   playSound(userChosenColor);
 });

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
   

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);

    

      }

function playSound(name){
   
    $("#" + name)
      .fadeOut(100)
      .fadeIn(100);
   var color = new Audio("sounds/" + name + ".mp3");
   color.play();
}

