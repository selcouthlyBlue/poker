const Hand = (cards) => {
    let hand = {};

    hand.replace = (nthCardToReplace, cardToPlace) => {
        cards[nthCardToReplace] = cardToPlace;
    }

    return hand;
}

export default Hand;