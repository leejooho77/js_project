function reverse(example) {
    var result = "";
    for(let i = example.length - 1; i >= 0; i--) {
		result += example[i];
    }
	return result;
}

Output: yadirF si tI

let colors = [
	{
		colorName: "red",
		r: 255,
		b: 0,
		g: 0
	},
	{
		colorName: "pink",
		r: 255,
		b: 182,
		g: 192
	},
	{
		colorName: "brown",
		r: 210,
		b: 105,
		g: 30
	},
	{
		colorName: "cyan",
		r: 0,
		b: 255,
		g: 255
	}
];

function newColor(color) {
	return color.b > 100 && color.g > 100;
}

console.log(colors.filter(newColor));