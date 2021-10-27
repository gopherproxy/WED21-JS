// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myGame = {
	// object properties
	computerChoice: '',
	userChoice: '',

	// object methods
	computerInput() {
		switch (Math.floor(Math.random() * 3)) {
			case 0:
				this.computerChoice = 'Rock';
				break;
			case 1:
				this.computerChoice = 'Paper';
				break;
			case 2:
				this.computerChoice = 'Scissors';
				break;
		}
		console.log('Computer: ' + this.computerChoice);
	},

	compare() {
		let showResult = document.getElementById('result')
		if (this.userChoice === this.computerChoice) {
			showResult.innerHTML = 'Game is a draw!';
		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {
			showResult.innerHTML = 'You win!';
		} else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors') {
			showResult.innerHTML = 'Computer wins!';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock') {
			showResult.innerHTML = 'Computer wins!';
		} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Paper') {
			showResult.innerHTML = 'You win!';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') {
			showResult.innerHTML = 'You win!';
		} else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {
			resultDisplay.innerHTML = 'Computer wins!';
		}
	},

	display() {
		// display player's choice
		let showPlayerChoice = document.getElementById('player_choice');
		showPlayerChoice.innerHTML = this.userChoice;
		// display computer choice
		let showComputerChoice = document.getElementById('computer_choice');
		showComputerChoice.innerHTML = this.computerChoice;
	}

	///// object end /////
};

var buttons = document.getElementsByClassName('button');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', play)
}

// Game Execution
function play() {
	myGame.userChoice = this.id;
	console.log('User: ' + myGame.userChoice);
	myGame.computerInput();
	myGame.compare();
	myGame.display();
}
