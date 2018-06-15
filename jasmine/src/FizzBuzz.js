function fizzBuzz(num) {
	let FizzBuzz = ['FizzBuzz', 'Buzz', 'Fizz'];
	let index = Math.min((num%3), 1) + Math.min((num%5), 1) * 2;
	if(index > FizzBuzz.length - 1) return(num);
	else return(FizzBuzz[index]);
}