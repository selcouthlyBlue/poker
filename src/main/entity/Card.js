const Card = (suit, face) => {
    let card = {};

    card.getSuit = () => (
        suit
    )

    card.getFace = () => (
        face
    )

    return card;
}

export default Card;