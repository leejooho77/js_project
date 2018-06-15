let whosTurn = 1;
let gameOver = false;
let player1Squares = [];
let player2Squares = [];
const winningCombo = [
    ['A1','B1','C1'], //ROW 1
    ['A2','B2','C2'], //ROW 2
    ['A3','B3','C3'], //ROW 3
    ['A1','A2','A3'], //COLUMN 1
    ['B1','B2','B3'], //COLUMN 2
    ['C1','C2','C3'], //COLUMN 3
    ['A1','B2','C3'], //DIAG 1
    ['A3','B2','C1'] //DIAG 2
];
const messageDiv = document.getElementById('message');

const squares = document.getElementsByClassName('square');
// console.log(squares);
for(let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function(event) {
		markSquare(squares[i]);
	});
}

function markSquare(clickedSquare) {
	if(clickedSquare.innerHTML !== `-`) {
		messageDiv.innerHTML = `Sorry, that square is already taken.`;
	} else if(whosTurn === 1) {
		clickedSquare.innerHTML = 'X';
		whosTurn = 0;
		player1Squares.push(clickedSquare.id);
		console.log(player1Squares);
		checkWin(1, player1Squares);
	} else {
		clickedSquare.innerHTML = 'O';
		whosTurn = 1;
		player2Squares.push(clickedSquare.id);
		console.log(player2Squares);
		checkWin(2, player2Squares);
	}
}

function checkWin(whoJustMarked, playerSquares) {
	for(let i = 0; i < winningCombo.length; i++) {
		let squareCount = 0;
		for(let j = 0; j < winningCombo[i].length; j++) {
			const currentWinningSquare = winningCombo[i][j];
			if(playerSquares.indexOf(currentWinningSquare) > -1) {
				squareCount++;
			}
		}
		if(squareCount === 3) {
			messageDiv.innerHTML = `Player ${whoJustMarked} jas won the game!`;
			gameOver = true;
			for(let k = 0; k < winningCombo[i].length; k++) {
				const thisSquare = document.getElementById(winningCombo[i][k]);
				console.log(winningCombo[i][k]);
				thisSquare.className += ' winning-square';
			}
		}
	}
}