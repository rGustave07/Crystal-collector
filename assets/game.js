
//Declartion of Variables
var wins = 0;
var losses = 0;
var userScore = 0;
var rndnum = randomGenerator(19,120);
//End of Variable Declaration

//Declaration of Functions
function randomGenerator (min,max) {
  return Math.floor(Math.random()*(max - min) + min);
}

function resetGame() {
  rndnum = randomGenerator(19,120);
  userScore = 0;
  $('#goalNumber').html(rndnum);
}
//End of declaration of Functions

//Putting a goal number for the User to start. Initializing Game stats
$('#goalNumber').html(rndnum);
$('#wins').html(wins);
$('#losses').html(losses);

// When user clicks a button, any button, a number is generated and added to current score
$('button').on('click', function(){
  userScore += randomGenerator(1,12)
  console.log(userScore);
  $('#currentScore').html(userScore);

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
})
