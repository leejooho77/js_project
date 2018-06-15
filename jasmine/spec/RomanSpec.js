describe("Number to English Unit Test", ()=>{
	// it takes 2 args:
	// 1. Name of THIS test
	// 2. Function to run which is THIS test
	it(`Number must be defined`, ()=>{
		// expect takes 1 arg
		// 1. a JS statement to evaluate
		expect(number).toBeDefined();
	});

	it(`Should be 4 for passing FizzBuzz 5`,()=>{
		expect(number(5)).toBe(4);	
	});
	it(`Should be 3 for passing FizzBuzz 6`,()=>{
		expect(number(6)).toBe(3);	
	});
	it(`Should be 6 for passing FizzBuzz 12`,()=>{
		expect(number(12)).toBe(6);	
	});
	it(`Should be 23 for passing FizzBuzz 342`,()=>{
		expect(number(342)).toBe(23);	
	});
	it(`Should be 20 for passing FizzBuzz 115`,()=>{
		expect(number(115)).toBe(20);	
	});
	it(`Should be 24 for passing FizzBuzz 999`,()=>{
		expect(number(999)).toBe(24);	
	});
});