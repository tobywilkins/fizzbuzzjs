function FizzBuzz() {

}

FizzBuzz.prototype.play = function(number){
  if (number % 3 === 0 && number % 5 === 0) {
    result = "fizzbuzz";
  } else if (number % 5 === 0) {
    result = "buzz";
  } else if (number % 3 === 0) {
    result = "fizz";
  } else {
    result = number
  }
  return result
}
