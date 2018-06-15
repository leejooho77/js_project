// FizzBuzz
// print number 1-100
// If the number is div by 3, print Fizz instead of the number
// If the number is div by 5, print Buzz instead of the number
// If the number is div by 3 and 5, print FizzBuzz instead of the number

// Describe takes 2 args:
// 1. Name of the testing block
// 2. Function to run, which is the test
// We have access to describe, because we included jasmine.js

describe("FizzBuzz Unit Test", ()=>{
	// it takes 2 args:
	// 1. Name of THIS test
	// 2. Function to run which is THIS test
	it(`FizzBuzz must be defined`, ()=>{
		// expect takes 1 arg
		// 1. a JS statement to evaluate
		expect(fizzBuzz).toBeDefined();
	});

	const random = Math.floor(Math.random() * 1000) * 15 + 15;
	it(`Should be FizzBuzz for passing FizzBuzz ${random}`,()=>{
		expect(fizzBuzz(random)).toBe('FizzBuzz');	
	});
});