var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern=[];

var level = 0;

$(document).keydown(function(){
  if (!started){
    $("#level-title").text("Level " +level);
    nextSequence();
  }
})

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
  userClickedPattern = [];

  level ++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name){
  var audio = new Audio("C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Simon Game\\sounds\\"+randomChosenColor+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
  }

  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
      nextSequence();
    }, 1000);
  }

  else{
    console.log("wrong");
    var wrongAudio = new Audio("C:\Users\knguyenle\Desktop\webdev\Simon Game\sounds\wrong.mp3";
    wrongAudio.play();
  }
}
