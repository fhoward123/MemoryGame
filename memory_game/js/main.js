console.log("Up and running!");

let cards = [ "queen", "queen", "king", "king" ];
let cardsInPlay = [];

let checkForMatch = () => {
	if ( cardsInPlay.length === 2 ) {
		if ( cardsInPlay[0] === cardsInPlay[1] ) {
			alert("You found amatch!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

let flipCard = (cardId) => {
	// let cardOne = cards[0];
	// cardsInPlay.push(cardOne);
	// console.log("User flipped " + cardsInPlay[cardsInPlay.length - 1] );
	// let cardTwo = cards[2];
	// cardsInPlay.push(cardTwo);
	console.log("User flipped " + cards[cardId] );
	cardsInPlay.push(cardId);
	checkForMatch();
	
}
flipCard(0);
flipCard(2);

