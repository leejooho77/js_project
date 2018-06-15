// 5 (expect 4)
// 6 (expect 3)
// 12 (expect 6)
// 342 (expect 23)
// 115 (expect 20)
// 1000 (expect 11) 
// 999 (expect 24) nine hundred and ninety-nine
// Do more...

// one two three four five six seven eight nine ten
// eleven twelve thirteen fourteen fifteen sixteen seventeen eightteen nineteen twenty
// twenty-one thirty forty fifty sixty seventy eighty ninety one hundred

const first = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const third = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function number(num) {
	let result = '';
	if(num == 0) result += 'zero';
	else if(num == 1000) result += 'one thousand'
	else if(floor(num/100) > 0) result += findHundredth(num) + findTenth(floor(num % 100));
	else if(floor(num/10 > 0)) result += findTenth(floor(num % 100));
	else result += findDigit(num);
	return result.split(" ").join('').length;
}

function findHundredth(num) {
	if(num % 100 == 0)
		return first[floor(num/100)] + " hundred ";
	else 
		return first[floor(num/100)] + " hundred and "

}

function findTenth(num) {
	if(floor(num/10) == 1) return second[num % 10];
	else return third[floor(num/10)] + ' ' + findDigit(num % 10);
}

function findDigit(num) {
	return first[num];
}

function floor(num) {
	return Math.floor(num);
}

for(let i = 0; i <= 1000; i++) {
	console.log(number(i));
}