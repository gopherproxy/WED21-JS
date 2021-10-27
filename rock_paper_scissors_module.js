var myGame = (function () {

	// "private" variables (only visible in module scope)
	var computerChoice, userChoice, showUserChoice, showComputerChoice, showResult;

	showResult = document.getElementById('result');
	showUserChoice = document.getElementById('player_choice');
	showComputerChoice = document.getElementById('computer_choice');

	// functions
	var computerInput, compare, display;

	// private functions  (only visible in module scope)
	computerInput = function () {
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
		console.log('Computer: ' + computerChoice);
	};

	compare = function () {
		if (userChoice === computerChoice) {
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
			showResult.innerHTML = 'Computer wins!';
		}
	};

	display = function () {
		showUserChoice.innerHTML = userChoice;
		showComputerChoice.innerHTML = computerChoice;
	}

	return {
		// public functions
		play: function () {
			userChoice = this.id;
			console.log('User: ' + userChoice);
			computerInput();
			display();
			compare();
		}
	};

	// module end //
})();

var buttons = document.getElementsByClassName('button');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', myGame.play)
}
