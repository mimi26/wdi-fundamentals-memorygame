 //create and array to hold the 4 cards.
 var cards = ['queen', 'queen', 'king', 'king'];
//array to hold cards in play.
  var cardsInPlay = [];

  var board = document.getElementById('game-board');
//create divs to hold cards, set to array elements, add to board
  function createBoard() {
  	for (var i = 0; i < cards.length; i++) {

  		var cardElement = document.createElement('div');

  		cardElement.className = 'card';

  		cardElement.setAttribute('data-card', cards[i]);

  		cardElement.addEventListener('click', isTwoCards);
  		
  		board.appendChild(cardElement);


  	}
  }

 
 //checks to see if there are cards in play.
function isTwoCards() {
  // add card to array of cards in play.
    cardsInPlay.push(this.getAttribute('data-card'));
	// flip cards over.
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/emperor.jpg' alt='The Emperor'>"; // king
	} else {
		this.innerHTML = "<img src='images/empress.jpg' alt='The Empress'>"; //queen
	}
  // check whether two cards are in play.
  if (cardsInPlay.length === 2) {
    // call function is match with cardsInPlay as argument.
    isMatch(cardsInPlay);
    // reset cards in play to zero to start again.
    cardsInPlay = [];
  }
}



//check for match and display appropriate message.
  function isMatch(cards) {
  var message = document.getElementById('message');
  if (cards[0]===cards[1]) {
    message.innerHTML = "You found a match! (click button below to play again)"
  } else {
    message.innerHTML = "Sorry, try again! (click button below)"
  }
  cardElement.innerHTML = '';
  
}
createBoard();


//refresh page on button click to start new game.
  var button = document.getElementById('newGame');
  button.addEventListener('click', function() {
    history.go(0);
  });



  
