buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#randomChosenColor").css({opacity:0});
  $("#randomChosenColor").play;
  }

  var audio = new Audio('audio_file.mp3');
  audio.play();
