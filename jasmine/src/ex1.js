function palindrome(str) {
	result = str.toLowerCase().split('').reverse().join('');
	if(result == str.toLowerCase()) return true;
	else return false;
}

console.log(palindrome('racecar'));