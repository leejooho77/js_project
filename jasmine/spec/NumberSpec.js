describe("Number To English Unit Test", ()=>{
	// it takes 2 args:
	// 1. Name of THIS test
	// 2. Function to run which is THIS test
	it(`Number To English must be defined`, ()=>{
		// expect takes 1 arg
		// 1. a JS statement to evaluate
		expect(number).toBeDefined();
	});

	it(`Should be 4 for passing Number To English 5`,()=>{
		expect(number(5)).toBe(4);	
	});
	it(`Should be 3 for passing Number To English 6`,()=>{
		expect(number(6)).toBe(3);	
	});
	it(`Should be 6 for passing Number To English 12`,()=>{
		expect(number(12)).toBe(6);	
	});
	it(`Should be 23 for passing Number To English 342`,()=>{
		expect(number(342)).toBe(23);	
	});
	it(`Should be 20 for passing Number To English 115`,()=>{
		expect(number(115)).toBe(20);	
	});
	it(`Should be 24 for passing Number To English 999`,()=>{
		expect(number(999)).toBe(24);	
	});
	it(`Should be 11 for passing Number To English 1000`,()=>{
		expect(number(1000)).toBe(11);	
	});
});