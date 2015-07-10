var guessDisplay = document.getElementById('guessDisplay');
var responseDisplay = document.getElementById('responseDisplay');
var endGame = document.getElementById('endGame');
var endGame2 = document.getElementById('endGame2');

function Game(favorite) {
	this.favorite = favorite;
	this.attempt = function() {
		gameOn = true;
		guess = "";
		message = "";
		tries = 0;
		while (gameOn) {
			guess = prompt("I have a favorite Avenger. Can you guess who it is in less than five tries? You have " + (5-tries) + " remaining.").toUpperCase();
			guessDisplay.textContent = (guess);
			switch (guess) {

				case ("IRON MAN"):
				case ("TONY"):
				case ("STARK"):
				case ("TONY STARK"):
				case ("IRONMAN"):
				if (this.favorite == "Iron Man") {
					gameOn = false;
					message = ("Yeah, I'm a nutter for Tony Stark."); 
					} else {
						message = ("That dude is a snarky jerk. No way.");
					}
				break;

				case ("CAPTAIN AMERICA"):
				case ("CAP"):
				case ("STEVE"):
				case ("STEVE ROGERS"):
				message = ("That guy drives me crazy. No.");
				break;

				case ("THE HULK"):
				case ("HULK"):
				case ("BRUCE"):
				case ("BANNER"):
				case ("BRUCE BANNER"):
				case ("DOCTOR BANNER"):
				case ("DR BANNER"):
				case ("DR. BANNER"):
				message = ("He's pretty awesome, but not my favorite.");
				break;

				case ("BLACK WIDOW"):
				case ("NATASHA"):
				case ("ROMANOFF"):
				case ("AGENT ROMANOFF"):
				case ("ROMANOVA"):
				case ("AGENT ROMANOVA"):
				case ("NATTY"):
				case ("NAT"):
				case ("BLACKWIDOW"):
				case ("WIDOW"):
				message = ("She's probably second best, but not my favorite.");
				break;

				case ("HAWKEYE"):
				case ("CLINT"):
				case ("BARTON"):
				case ("CLINT BARTON"):
				message = ("They never did enough with his character... Nope. Wasted potential.");
				break;

				case ("THOR"):
				message = ("Nah... he's too high, mighty and haughty for me.");
				break;

				default:
				message = ("Are we talking about the same thing? I mean just the Avengers from the first movie");
				};
			tries++;
			responseDisplay.textContent = (message);

			if (tries > 4) {
			endGame.innerHTML = ("You've used up all your tries. The answer was " + this.favorite + ". Better luck next time!");
			gameOn = false;
			}
  	}
  	if (tries == 1) {
  		endGame.innerHTML = ("You got it on your first try!");
  	} else if (tries <= 4) {
  		endGame.innerHTML = ("You got it in " + tries + " tries.");
  	}
  	if (tries <= 4) {
  		endGame2.innerHTML = ("You win. Thanks for playing.");
  	}
  }
}

var ironManIsMyFavorite = new Game("Iron Man");
ironManIsMyFavorite.attempt();
