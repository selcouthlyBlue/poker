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

    card.compareByFace = (otherCard) => (
        (face > otherCard.getFace()) ? -1 : ((otherCard.getFace() > face) ? 1 : 0)
    )

    card.isOneRankHigherThan = (otherCard) => {
        return (face - otherCard.getFace()) === 1;
    }

    return card;
}

export default Card;