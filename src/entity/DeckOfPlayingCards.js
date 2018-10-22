import FACES from "entity/deck-of-playing-cards/FACES";
import SUITS from "entity/deck-of-playing-cards/SUITS";

import PlayingCard from "entity/deck-of-playing-cards/PlayingCard";
import Deck from "entity/Deck";

const DeckOfPlayingCards = () => {
    let cards = [];
    SUITS.enums.forEach((suit) => {
        FACES.enums.forEach((face) => {
            cards.push(PlayingCard(suit, face));
        })
    })
    return Deck(cards);
}

export default DeckOfPlayingCards;