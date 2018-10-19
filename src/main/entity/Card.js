const Card = (suit, face) => {
    let card = {};

    card.getSuit = () => (
        suit
    )

    card.getFace = () => (
        face
    )

    card.hasSameFaceAs = (otherCard) => (
        face === otherCard.getFace()
    )

    return card;
}

export default Card;