function palindromes(str) {
	let string;
	let result = '';

	for(let i = str.length - 1; i >= 0; i--) {
		let char = str.toLowerCase().charAt(i);
		if(char != ',' && char != '!' && char != '.' && char != ' ')
		result += char;
	}

	string = result.split('').reverse().join('');

	if(string == result) return true;
	else return false;
}