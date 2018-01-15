



function fizzBuzz(number) {
  if (isNaN(number)) {
    console.log('Give me a number. Please.');
  }
  else if (number < 0) {
    console.log('Give me a positive number. Please.');
  }
  else if (number % 15 == 0) {
    console.log('FizzBuzz');
  }
  else if (number % 5 == 0) {
    console.log('Buzz');
  }
  else if (number % 3 == 0) {
    console.log('Fizz');
  }
  else {
    console.log(number);
  }
}
