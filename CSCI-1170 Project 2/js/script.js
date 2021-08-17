// Basic framework and initial work done by Md Asef Jawad (B00856362)

var randomNumber;
var gameBox = document.getElementById("timer-interface");

var startTime;
var endedTime;
var reactTime;
var spentTime;
var name = "";

var totalTime = 0;
var rightCount = 0;
var wrongCount = 0;

// Work on major game functionality, selection and changing of div colors
// and detection of correct/incorrect answers as well as the aler messages
// and changing div text to alert player was done by Aitzaz Qadir Khowaja (B00853169)

function startGame() {

	randomNumber = Math.floor(Math.random() * 10);
	startTime = Date.now();
	console.log(randomNumber);

	var timer = setInterval(
		function () {
			spentTime = Date.now() - startTime;
			document.getElementById("timer").innerHTML = spentTime;
		}
	);

	if (randomNumber >= 0 && randomNumber <= 2) {
		gameBox.style.backgroundColor = "red"
	}
	else if (randomNumber > 2 && randomNumber <= 4) {
		gameBox.style.backgroundColor = "blue"
	}
	else if (randomNumber > 4 && randomNumber <= 8) {
		gameBox.style.backgroundColor = "green"
	}
	else if (randomNumber > 8 && randomNumber <= 10) {
		gameBox.style.backgroundColor = "yellow"
	}

}

function red() {

	endedTime = Date.now();
	reactTime = endedTime - startTime;

	if (randomNumber >= 0 && randomNumber <= 2) {
		document.getElementById("player-answer").innerHTML = 
			"You have chosen the RIGHT color! :-)<br> Your reaction time was " + reactTime + "ms";
		startGame.call();
		rightCount++;
	}
	else {
		document.getElementById("player-answer").innerHTML = 
			"You chose the WRONG color! :-(<br> Keep Trying!";
		startGame.call();
		wrongCount++;
	}
	update.call();
}

function blue() {

	endedTime = Date.now();
	reactTime = endedTime - startTime;

	if (randomNumber > 2 && randomNumber <= 4) {
		document.getElementById("player-answer").innerHTML = 
		"You have chosen the RIGHT color! :-)<br> Your reaction time was " + reactTime + "ms";
		startGame.call();
		rightCount++;
	}
	else {
		document.getElementById("player-answer").innerHTML = 
			"You chose the WRONG color! :-(<br> Keep Trying!";
		startGame.call();
		wrongCount++;
	}
	update.call();
}

function green() {

	endedTime = Date.now();
	reactTime = endedTime - startTime;

	if (randomNumber > 4 && randomNumber <= 8) {
		document.getElementById("player-answer").innerHTML = 
			"You have chosen the RIGHT color! :-)<br> Your reaction time was " + reactTime + "ms";
		startGame.call();
		rightCount++;
	}
	else {
		document.getElementById("player-answer").innerHTML = 
			"You chose the WRONG color! :-(<br> Keep Trying!";
		startGame.call();
		wrongCount++;
	}
	update.call();
}

function yellow() {

	endedTime = Date.now();
	reactTime = endedTime - startTime;

	if (randomNumber > 8 && randomNumber <= 10) {
		document.getElementById("player-answer").innerHTML = 
		"You have chosen the RIGHT color! :-)<br> Your reaction time was " + reactTime + "ms";
		startGame.call();
		rightCount++;
	}
	else {
		document.getElementById("player-answer").innerHTML = 
			"You chose the WRONG color! :-(<br> Keep Trying!";
		startGame.call();
		wrongCount++;
	}
	update.call();
}

// Work on functionality for updating player scores, displaying the player's scores
// and submitting the player name done by Hao Wang (B00692430) and Ruiting Yao (B00527867)

function update() {
	var node = document.createElement("li");
	var childnode = document.createTextNode(reactTime + " ms");
	node.appendChild(childnode);
	document.getElementById("ol").appendChild(node);
	totalTime += reactTime;
}

function score() {
	var times = document.getElementById("ol").getElementsByTagName("li").length;
	var averageTime = totalTime / times;
	var successRate = rightCount / times;
	window.alert("Name: " + name +
		"\nTimes played: " + times +
		"\nAverage Time: " + Math.round(averageTime) + "ms" +
		"\nSuccess Count: " + rightCount +
		"\nFailure Count: " + wrongCount +
		"\nSuccess Rate: " + (Math.round(successRate * 100) / 100)*100 + "%"
		);
}

function submit() {
	name = document.getElementById("name").value;
	window.alert("Player name has been set to: " + name);
}

function pause() {
	window.alert("The game is paused! You can check your scores!");
}