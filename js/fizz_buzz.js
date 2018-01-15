function fizzBuzz(number) {
  if (isNaN(number)) {
      return 'Give me a number. Please.'
  }
  else if (number < 0) {
    return 'Give me a positive number. Please.'
  }
  else if (number % 15 == 0) {
    return 'FizzBuzz'
  }
  else if (number % 5 == 0) {
    return 'Buzz'
  }
  else if (number % 3 == 0) {
    return 'Fizz'
  }
  else {
    return number
  }
}
