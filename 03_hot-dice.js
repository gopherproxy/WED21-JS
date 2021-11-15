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
		this.diceResult = 0; // player properties 
	}

	rollDices(id1, id2, output) { // call to the dice class - 2 dice instantiated and rolled
		let dice1 = new Dice(id1);
		dice1.rollDice();

		let dice2 = new Dice(id2);
		dice2.rollDice();

		this.diceResult = dice1.result + dice2.result;
		document.getElementById(output).innerHTML = this.diceResult;
	}

	get result() {
			return this.diceResult; // getter to read the result of the two dice
		}
		// END class Player
}

/////////////////
// GAME LOGIC //
////////////////

function gameLoop() {
	'use strict';

	var player1 = new Player();
	player1.rollDices('dice1', 'dice2', 'pResult');

}

gameLoop();
