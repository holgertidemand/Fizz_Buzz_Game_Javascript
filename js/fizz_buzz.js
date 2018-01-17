


function fizzBuzz(number) {
  if (isNaN(number)) {
      return 'Give me a number. Please.';
  }
  else if (number <= 0) {
    return 'Give me a positive number. Please.';
  }
  else if (number % 15 == 0) {
    return 'FizzBuzz';
  }
  else if (number % 5 == 0) {
    return 'Buzz';
  }
  else if (number % 3 == 0) {
    return 'Fizz';
  }
  else {
    return number;
  }
}


function randomNumber (){
  var randomnumber = Math.floor((Math.random() * 15) + 1);
  return randomnumber;
}

function saveData(x, y) {
    x.toString();
    sessionStorage.setItem('Score: ', x);
    y.toString();
    sessionStorage.setItem('Attempts: ', y);
}

function returnSavedScore(){
  var score = sessionStorage.getItem('Score: ');
  return score;
}

function returnSavedAttempts(){
  var attempts = sessionStorage.getItem('Attempts: ');
  return attempts;
}

function submitScore(name, score){
  var user = localStorage.setItem(name, score);
}

function countDown(seconds, element) {
  var holger = $(element);
  var score = returnSavedScore();
  var attempts = returnSavedAttempts();
  holger.html("You have " + seconds + " seconds to answer");

  if (seconds < 1) {
    clearTimeout(timer);
    holger.replaceWith('<h4>You answered ' + attempts + ' times and got the score: ' + score + '<a href="#"> HighScore</a></h4>');
    // alert('Great jobb! You answered ' + attempts + ' times and got the score: ' + score);
    // var name = prompt('Please type in your username.');
    submitScore(user_name, score);
  }

  seconds--;
  var timer = setTimeout('countDown('+seconds+', "'+element+'")', 1000);
}
