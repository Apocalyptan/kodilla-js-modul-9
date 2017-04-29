/*====
New Game Button
====*/
var newGameBtn = document.getElementById("js-newGameButton");

newGameBtn.addEventListener("click", newGame);

/*====
Player Buttons
====*/
var pickRock = document.getElementById("js-playerPick_rock");
var pickPaper = document.getElementById("js-playerPick_paper");
var pickScissors = document.getElementById("js-playerPick_scissors");

pickRock.addEventListener("click", function () { playerPick("Kamień"); });
pickPaper.addEventListener("click", function () { playerPick("Papier"); });
pickScissors.addEventListener("click", function () { playerPick("Nożyce"); });

/*====
Starting Game Values
====*/
var gameState = "notStarted", //started /ended
	player = {
		name: "",
		score: 0
	},
	computer = {
		score: 0
	};

/*====
Game Elements Display
====*/
var newGameElem = document.getElementById("js-newGameElement");
var pickElem = document.getElementById("js-playerPickElement");
var resultsElem = document.getElementById("js-resultsTableElement");

/*====
Game State
====*/
function setGameElements () {
	switch(gameState) {
		case "started":
			newGameElem.style.display = "none";
			pickElem.style.display = "block";
			resultsElem.style.display = "block";
			break;

		case "ended":
			newGameBtn.innerText = "Jeszcze raz";

		case "notStarted":
		default:
			newGameElem.style.display = "block";
			pickElem.style.display = "none";
			resultsElem.style.display = "none";			
	}
}

// Game Layout
setGameElements();

/*====
New Game
====*/
var playerPointsElem = document.getElementById("js-playerPoints");
var playerNameElem = document.getElementById("js-playerName");
var computerPointsElem = document.getElementById("js-computerPoints");

function newGame() {
	player.name = prompt("Wpisz swoje imię:", "Twoje imię");
	if (player.name) {
		player.score = computer.score = 0;
		gameState = "started";
		setGameElements();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

/*====
Picks
====*/

// Player Pick
function playerPick (playerPick) {
	console.log(playerPick);
}
// Computer Pick
function getComputerPick() {
	var possiblePicks = ["Kamień", "Papier", "Nożyce"];
	return possiblePicks[Math.floor(Math.random()*3)];
}

// Picks - Vars and Funcs
var playerPickElem = document.getElementById("js-playerPick");
var computerPickElem = document.getElementById("js-computerPick");
var playerResultElem = document.getElementById("js-playerResult");
var computerResultElem = document.getElementById("js-computerResult");

function playerPick (playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
	setGamePoints();
	checkGameWinner();
}

/*====
Game Mechanics
====*/
function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = "";

	var winnerIs = "player";

		if (playerPick == computerPick) {
			winnerIs = "noone"; // remis
			playerResultElem.innerHTML = "Remis!";
			computerResultElem.innerHTML = "Remis!";
		}
		else if (
			(computerPick == "Kamień" && playerPick == "Nożyce") ||
			(computerPick == "Nożyce" && playerPick == "Papier") ||
			(computerPick == "Papier" && playerPick == "Kamień")) {

			winnerIs = "computer";
		}

		if (winnerIs == "player") {
			playerResultElem.innerHTML = "Wygrana!";
			player.score++;
		}
		else if (winnerIs == "computer") {
			computerResultElem.innerHTML = "Wygrana!";
			computer.score++;
		}
}

/*====
Game Points Update
====*/
function setGamePoints () {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

/*====
Finish
====*/
function checkGameWinner () {
	if (playerPointsElem.innerHTML == 10) {
		alert("Masz 10 punktów! Wygrywasz!");
		restart();
	}
	else if (computerPointsElem.innerHTML == 10) {
		alert("Komputer ma 10 punktów! Przegrywasz!");
		restart();
	}
}

// Restart
function restart () {
	gameState = "ended";
	setGameElements();
}