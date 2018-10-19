const Hand = (cards) => {
    let hand = {};

    hand.replace = (nthCardToReplace, cardToPlace) => {
        cards[nthCardToReplace] = cardToPlace;
    }

    hand.getCards = () => (
        cards.slice()
    )

    return hand;
}

export default Hand;