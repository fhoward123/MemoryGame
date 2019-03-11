console.log("Up and running!");

let cards = [
	{
		rank      : "queen",
		suit      : "hearts",
		cardImage : "images/queen-of-hearts.png",
	},
	{
		rank      : "queen",
		suit      : "diamonds",
		cardImage : "images/queen-of-diamonds.png",
	},
	{
		rank      : "king",
		suit      : "hearts",
		cardImage : "images/king-of-hearts.png",
	},
	{
		rank      : "king",
		suit      : "hearts",
		cardImage : "images/king-of-hearts.png",
	},
];

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
	console.log("User flipped " + cards[cardId].rank );
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}
flipCard(0);
flipCard(2);

