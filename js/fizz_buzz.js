



function fizzBuzz(number) {
  if (isNaN(number)) {
    alert('Give me a number. Please.');
  }
  else if (number < 0) {
    alert('Give me a positive number. Please.');
  }
  else if (number % 15 == 0) {
    alert('FizzBuzz');
  }
  else if (number % 5 == 0) {
    alert('Buzz');
  }
  else if (number % 3 == 0) {
    alert('Fizz');
  }
  else {
    alert(number);
  }
}
