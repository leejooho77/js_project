// I=1
// V=5
// X=10
// L=50
// C=100
// D=500
// M=1000

// 1. A letter repeats its value that many times (XXX = 30, CC = 200, etc.). A letter can only be repeated three times.
// 2. If one or more letters are placed after another letter of greater value, add that amount.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)
// 3. If a letter is placed before another letter of greater value, subtract that amount.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// Several rules apply for subtracting amounts from Roman numerals:
// a. Only subtract powers of ten (I, X, or C, but not V or L)
// For 95, do NOT write VC (100 – 5). 
// DO write XCV (XC + V or 90 + 5)
// b. Only subtract one number from another.
// For 13, do NOT write IIXV (15 – 1 - 1). 
// DO write XIII (X + I + I + I or 10 + 3)
// c. Do not subtract a number from one that is more than 10 times greater (that is, you can subtract 1 from 10 [IX] but not 1 from 20—there is no such number as IXX.)
// For 99, do NOT write IC (C – I or 100 - 1). 
// DO write XCIX (XC + IX or 90 + 9)
// 4. A bar placed on top of a letter or string of letters increases the numeral's value by 1,000 times.
// XV = 15, (X-bar)(V-bar)= 15,000

const roman_numeral_map = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1	
};

console.log(roman_numeral_map);

function roman(num) {
	let temp_num = num;
	let roman = '';
	for(i in roman_numeral_map) {
		while(roman_numeral_map[i] <= temp_num) {
			temp_num -= roman_numeral_map[i];
			roman += i;
		}
	}
	return roman;
}

for(let i = 1; i <= 1000; i++) {
	console.log(roman(i));
}