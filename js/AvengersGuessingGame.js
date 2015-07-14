var guessDisplay = document.getElementById('guessDisplay');
var responseDisplay = document.getElementById('responseDisplay');
var endGame = document.getElementById('endGame');
var endGame2 = document.getElementById('endGame2');

function Game(favorite) {
	this.favorite = favorite;
	this.attempt = function() {
		gameOn = true;
		tries = 0;
		guess = "";
		message = "";
		guessDisplay.textContent = ("Let's see if you can guess.");
		while ((gameOn) && (tries <5)) {
			guess = prompt("I have a favorite Avenger. Can you guess who it is in less than five tries? You have " + (5-tries) + " remaining.").toUpperCase();
			tries++;
			switch (guess) {

				case ("IRON MAN"):
				case ("TONY"):
				case ("STARK"):
				case ("TONY STARK"):
				case ("IRONMAN"):
				guessDisplay.textContent = ("Iron Man");
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
				guessDisplay.textContent = ("Captain America");
				if (this.favorite == "Captain America") {
					gameOn = false;
					message = ("Hell yeah! Cap is totally the best."); 
					} else {
						message = ("That guy drives me crazy. No.");
					}
				break;

				case ("THE HULK"):
				case ("HULK"):
				case ("BRUCE"):
				case ("BANNER"):
				case ("BRUCE BANNER"):
				case ("DOCTOR BANNER"):
				case ("DR BANNER"):
				case ("DR. BANNER"):
				guessDisplay.textContent = ("The Hulk");
				if (this.favorite == "The Hulk") {
					gameOn = false;
					message = ("HULK SMASH!!!!!"); 
					} else {
						message = ("He's pretty awesome, but not my favorite.");
					}
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
				guessDisplay.textContent = ("Black Widow");
				if (this.favorite == "Black Widow") {
					gameOn = false;
					message = ("She's deadly, she's got depth of character, and she's the most badass."); 
					} else {
						message = ("She's probably second best, but not my favorite.");
					}
				break;								

				case ("HAWKEYE"):
				case ("CLINT"):
				case ("BARTON"):
				case ("CLINT BARTON"):
				case ("HAWK EYE"):			
				guessDisplay.textContent = ("Hawkeye");
				if (this.favorite == "Hawkeye") {
					gameOn = false;
					message = ("He's got no super powers. He's the underdog, and he's pure skill."); 
					} else {
						message = ("They never did enough with his character... Nope. Wasted potential.");
					}
				break;				

				case ("THOR"):
				guessDisplay.textContent = ("Thor");
				if (this.favorite == "Thor") {
					gameOn = false;
					message = ("God of Thunder. How can you beat that?"); 
					} else {
						message = ("Nah... he's too high, mighty and haughty for me.");
					}		
				break;

				default:
				message = ("Are we talking about the same thing? I mean just the Avengers from the first movie");
			};
			responseDisplay.textContent = (message);
			}
			if ((tries == 5) && (gameOn)) {
				endGame.innerHTML = ("You've used up all your tries. The answer was " + this.favorite + ". Better luck next time!"); 
			} else if (tries == 1) {
				endGame.innerHTML = ("You got it on your first try! You win. Thanks for playing.");
			} else {
				endGame.innerHTML = ("You got it in " + tries + " tries. You win. Thanks for playing.");
			}
		}
	}



var favoriteSelector = Math.floor(Math.random()*6 +1);
switch (favoriteSelector) {
	case (1): 
		var play = new Game("Iron Man")
	  break; 

	case (2): 
		var play = new Game("Captain America")
	  break; 

	case (3): 
		var play = new Game("The Hulk")
	  break; 

	case (4): 
		var play = new Game("Black Widow")
	  break; 

	case (5): 
		var play = new Game("Hawkeye")
	  break; 

	case (6): 
		var play = new Game("Thor")
	  break; 
}
play.attempt();

//var ironManIsMyFavorite = new Game("Iron Man");
//ironManIsMyFavorite.attempt();

// var captainAmericaIsMyFavorite = new Game("Captain America");
// captainAmericaIsMyFavorite.attempt();
