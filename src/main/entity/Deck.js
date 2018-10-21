import shuffle from "shuffle-array";

const Deck = (cards) => {
    let deck = {};

    deck.draw = () => {
        return cards.pop();
    }

    deck.shuffle = () => {
        shuffle(cards);
    }

    return deck;
}

export default Deck;