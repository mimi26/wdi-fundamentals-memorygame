
//give each card its own var.
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	alert("You found a match!")
} else if (cardThree === cardFour) {
	alert("You found a match!")
} else if (cardTwo === cardFour) {
	alert("Sorry, try again.")
} else if (cardOne === cardThree) {
	alert("Sorry, try again.")
}