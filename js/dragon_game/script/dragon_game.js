const dragon = document.getElementById("dragon");
console.dir(dragon);

function rollDice() {
	let rand1 = Math.ceil(Math.random() * 6);
	let rand2 = Math.ceil(Math.random() * 6);

	let dice = document.getElementById('dice');
	dice.children[0].src = `./images/d${rand1}.gif`;
	dice.children[1].src = `./images/d${rand2}.gif`;
	console.dir(dice);

	if(rand1 + rand2 > 8) {
		document.getElementById("dragon").children[0].src = "https://vignette.wikia.nocookie.net/reign-of-fire/images/8/82/A_deleted_scene_showing_the_disassembled_dead_Dragon..jpg/revision/latest?cb=20130813082231";
		document.getElementById("dragon").children[0].style.width = "631px";
		document.getElementById("dragon").children[0].style.height = "463px";
		document.getElementById("message").innerHTML = "<p>You have defeated the dragon</p>";
	}
}