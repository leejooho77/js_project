var index = 0;
var c_accuracy = 0;
var cor_counter = 0;
var o_accuracy = 0;
var cur_char_count = 0;
var total_char_count = 0;
var seconds = 0;
var cur_seconds = 0;
var timer = null;
var sample = [
	"show me the money", 
	"black sheep wall", 
	"operation cwal", 
	"food for thought", 
	"power overwhelming",
	"there is no cow level",
	"game over man",
	"staying alive",
	"the gathering",
	"something for nothing",
];

function nextLine() {
	reset();
	document.getElementById("textbox").innerHTML = sample[index];
	index = Math.floor(Math.random() * 10);
}

function execute() {
	if(timer == null)
		timer = setInterval(start, 1000);
	calc();
}

function start() {
	document.getElementById("time").innerHTML = ++seconds + "s";
}

function calc() {
	var sentence = document.getElementById("textbox").innerHTML;
	var input = document.getElementById("user_input").value;
	var cor_arr = [];

	if(input.length > sentence.length) {
		nextLine();
	}
	for(let i = 0; i < input.length; i++) {
		if(input[i] === sentence[i]) {
			c_accuracy++;
			cur_char_count = cor_arr.push(true);
		}
		else {
			cur_char_count = cor_arr.push(false);
		}
	}

	var new_seconds = seconds - cur_seconds;
	var cpm_result = c_accuracy/(new_seconds/60);
	document.getElementById("currentspdbar").style.width = cpm_result + 'px'; 
	var acc_result = c_accuracy/cur_char_count * 750;
	document.getElementById("currentaccuracybar").style.width = acc_result + 'px';
	cor_counter = c_accuracy
	c_accuracy = 0;
}

function reset() {
	cur_seconds = seconds;
	o_accuracy += cor_counter;
	total_char_count += cur_char_count;
	var avg_cpm_result = o_accuracy/(seconds/60);
	document.getElementById("avgspdbar").style.width = avg_cpm_result + 'px'; 
	var avg_acc_result = o_accuracy/total_char_count * 750;
	document.getElementById("avgaccuracybar").style.width = avg_acc_result + 'px';
	document.getElementById("user_input").value = "";
}
