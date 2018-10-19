import shuffle from "shuffle-array";

import Card from "entity/Card";
import FACES from "entity/FACES";
import SUITS from "entity/SUITS";

function newDeck() {
    let deck = [];
    SUITS.enums.forEach((suit) => {
        FACES.enums.forEach((face) => {
            deck.push(Card(suit, face));
        })
    })
    return deck;
}

const Deck = () => {
    let deck = {};
    let cards = newDeck();

    deck.draw = () => {
        return cards.pop();
    }

    deck.shuffle = () => {
        shuffle(cards);
    }

    return deck;
}

export default Deck;