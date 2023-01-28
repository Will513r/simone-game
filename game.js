var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;

$(document).keypress(function(){
  nextSequence();
    
  
});

$(".btn").click(function () {
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push("userChosenColor");
   
   playSound(userChosenColor);
 });

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  level += 1;
  $("h1").text("Level " + level);
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

function checkAnswer(currentLevel) {
  
}