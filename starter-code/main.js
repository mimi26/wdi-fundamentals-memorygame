
//give each card its own var.
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne===cardTwo) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

// if (cardOne===cardThree) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

// if (cardOne===cardFour) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

// if (cardTwo===cardThree) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

// if (cardTwo===cardFour) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

// if (cardThree===cardFour) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }




var createCards = function() {
	var board = document.getElementById('game-board');

 for (var i=0; i < 4; i++) {
 	var card = document.createElement('div');
	card.className = 'card';
	
	board.appendChild(card);

}
};
createCards();
