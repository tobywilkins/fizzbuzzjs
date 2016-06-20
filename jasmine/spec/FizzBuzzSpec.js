describe("FizzBuzz", function(){

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })

  describe("multiples of three", function(){
    it ("returns fizz if number is 3", function(){
      expect(fizzBuzz.play(3)).toEqual("fizz")
    })
    it ("returns fizz if number is 6", function(){
      expect(fizzBuzz.play(6)).toEqual("fizz")
    })
    it ("returns fizz if number is 9", function(){
      expect(fizzBuzz.play(9)).toEqual("fizz")
    })
  })

  describe("multiples of five", function(){
    it ("returns buzz if number is 5", function(){
      expect(fizzBuzz.play(5)).toEqual("buzz")
    })
    it ("returns buzz if number is 10", function(){
      expect(fizzBuzz.play(10)).toEqual("buzz")
    })
    it ("returns buzz if number is 20", function(){
      expect(fizzBuzz.play(20)).toEqual("buzz")
    })
  })

  describe("multiples of three and five", function(){
    it ("returns fizzbuzz if number is 15", function(){
      expect(fizzBuzz.play(15)).toEqual("fizzbuzz")
    })
    it ("returns fizzbuzz if number is 30", function(){
      expect(fizzBuzz.play(30)).toEqual("fizzbuzz")
    })
    it ("returns fizzbuzz if number is 45", function(){
      expect(fizzBuzz.play(45)).toEqual("fizzbuzz")
    })
  })

  describe("non fizzbuzz multiples", function(){
    it ("returns number if number is 1", function(){
      expect(fizzBuzz.play(1)).toEqual(1)
    })
    it ("returns fizzbuzz if number is 7", function(){
      expect(fizzBuzz.play(7)).toEqual(7)
    })
    it ("returns fizzbuzz if number is 98", function(){
      expect(fizzBuzz.play(98)).toEqual(98)
    })
  })
})
