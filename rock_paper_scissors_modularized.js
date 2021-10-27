// Global variables
var computerChoice;
var userChoice;
var buttons;

buttons = document.getElementsByClassName('button'); // returning an array
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', play)
}

// main function containing the game logic
function play() {
	//console.log('playing');
	// user input:
	userChoice = this.id;
	computerInput();
	compare();
	display();
}

// method generating the computer's choice
function computerInput() {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
			computerChoice = 'Rock';
			break;
		case 1:
			computerChoice = 'Paper';
			break;
		case 2:
			computerChoice = 'Scissors';
			break;
	}
	console.log(computerChoice);
}

// method comparing the choices
function compare() {
	let showResult = document.getElementById('result')
	if (userChoice === computerChoice) {
		//console.log('draw');
		showResult.innerHTML = 'Game is a draw!';
	} else if (userChoice === 'Paper' && computerChoice === 'Rock') {
		showResult.innerHTML = 'You win!';
	} else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
		showResult.innerHTML = 'Computer wins!';
	} else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
		showResult.innerHTML = 'Computer wins!';
	} else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
		showResult.innerHTML = 'You win!';
	} else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
		showResult.innerHTML = 'You win!';
	} else if (userChoice === 'Rock' && computerChoice === 'Paper') {
		resultDisplay.innerHTML = 'Computer wins!';
	}
}

// method displaying the choices
function display() {
	// display player's choice
	let showPlayerChoice = document.getElementById('player_choice');
	showPlayerChoice.innerHTML = userChoice;
	// display computer choice
	let showComputerChoice = document.getElementById('computer_choice');
	showComputerChoice.innerHTML = computerChoice;
}

/*

Stuff to handle ;-):
1. Depending on the button pushed the user choice needs to be registered
2. The computer should make a random choice - computerInput()
3. Choices need to be compared - compare()
4. Winner should be displayed - display()


*/
