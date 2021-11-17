class Dice {

	constructor(name) {
		this.name = name; // constructor takes an attribute 'name' in order to pass on a unique dice-ID
		this.face = 0;
	}

	rollDice() {
		this.face = Math.ceil((Math.random()) * 6); // returning whole number between 1 - 6
		console.log(this.name + ': ' + this.face);
		// printing the result to an HTML element with the same ID
		document.getElementById(this.name).innerHTML = this.face;
	}

	get result() {
		return this.face; // getter to read the result of one dice
	}

	// END class Dice
}

class Player {

	constructor() {
		this.name = 'Human';
		this.diceResult = 0;
		this.score = 0;
	}

	rollDice(id1, id2, output) {
		let dice1 = new Dice(id1);
		dice1.rollDice();

		let dice2 = new Dice(id2);
		dice2.rollDice();

		this.diceResult = dice1.result + dice2.result;
		document.getElementById(output).innerHTML = this.diceResult;
	}

	get result() {
		return this.diceResult
	}

	playerName() {
		// human player is supposed to choose a nickname
		// to be stored in local storage!
	}

	// END class Player
}


/////////////////
// GAME LOGIC //
////////////////
var playAgainButton;

playAgainButton = document.getElementById('playAgain');
playAgainButton.addEventListener('click', gameLoop);

var player1 = new Player();
var computer = new Player();

function gameLoop() {

	function compare(human, computer) {
		console.log(human.result + '<-->' + computer.result);
		if (human.result < computer.result) {
			computer.score++;
			document.getElementById('winLoose').innerHTML = 'You loose!'
		} else if (human.result > computer.result) {
			human.score++;
			document.getElementById('winLoose').innerHTML = 'You win!'
		} else {
			document.getElementById('winLoose').innerHTML = 'It\'s a draw'
		}
	};

	player1.rollDice('dice1', 'dice2', 'pResult');
	computer.rollDice('dice3', 'dice4', 'cResult');
	compare(player1, computer);

}

gameLoop();
