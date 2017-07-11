
//Declartion of Variables
var wins = 0;
var losses = 0;
var userScore = 0;
var btn1 = 0;
var btn2 = 0;
var btn3 = 0;
var btn4 = 0;
var rndnum = randomGenerator(19,120);
//End of Variable Declaration

//Declaration of Functions
function randomGenerator (min,max) {
  return Math.floor(Math.random()*(max - min) + min);
}

function resetGame() {
  rndnum = randomGenerator(19,120);
  userScore = 0;
  btn1 = randomGenerator(1,12);
  btn2 = randomGenerator(1,12);
  btn3 = randomGenerator(1,12);
  btn4 = randomGenerator(1,12);
  $('#goalNumber').html(rndnum);
  $('#currentScore').html(userScore);
}
//End of declaration of Functions

//Putting a goal number for the User to start. Initializing Game stats
$('#goalNumber').html(rndnum);
$('#wins').html(wins);
$('#losses').html(losses);
// Initlize starting crystal values
btn1 = randomGenerator(1,12);
btn2 = randomGenerator(1,12);
btn3 = randomGenerator(1,12);
btn4 = randomGenerator(1,12);
// When user clicks a button, any button, a number is generated and added to current score
// Changing this to when the user hits a specific button, that button is assigned a number until the end
// Start of old code
// $('button').on('click', function(){
//   userScore += randomGenerator(1,12)
//   console.log(userScore);
//   $('#currentScore').html(userScore);
// end of old code

  $('#button1').on('click', function() {
    userScore += btn1
    $('#currentScore').html(userScore);
  })

  $('#button2').on('click', function() {
    userScore += btn2
    $('#currentScore').html(userScore);
  })

  $('#button3').on('click', function() {
    userScore += btn3
    $('#currentScore').html(userScore);
  })

  $('#button4').on('click', function() {
    userScore += btn4
    $('#currentScore').html(userScore);
  })

document.onclick = function() {
  // if the user reaches a win or loss condition do stuff
  if (userScore === rndnum) {
    wins++;
    $('#results').html("You Win!!!!");
    $('#wins').html(wins);
    resetGame();
  } else if (userScore > rndnum) {
    losses++;
    $('#results').html("You Lose!!!");
    $('#losses').html(losses);
    resetGame();
  }
}







  // // if the user reaches a win or loss condition do stuff
  // if (userScore === rndnum) {
  //   wins++;
  //   $('#results').html("You Win!!!!");
  //   $('#wins').html(wins);
  //   resetGame();
  // } else if (userScore > rndnum) {
  //   losses++;
  //   $('#results').html("You Lose!!!");
  //   $('#losses').html(losses);
  //   resetGame();
  // }
