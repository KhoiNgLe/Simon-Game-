var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern=[];

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4   );
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
