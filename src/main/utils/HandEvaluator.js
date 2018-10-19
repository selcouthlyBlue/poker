import POKER_HANDS from "utils/POKER_HANDS";

function hasFourOfAKind(cards) {
    let result = false;
    cards.forEach((card) => {
        let cardsWithSameFace = cards.filter((otherCard) => (
            card.hasSameFaceAs(otherCard)
        ));
        if (cardsWithSameFace.length === 4) {
            result = true;
            return;
        }
    });
    return result;
}

function hasTrio(cards) {
    let result = false;
    cards.forEach((card) => {
        let cardsWithSameFace = cards.filter((otherCard) => (
            card.hasSameFaceAs(otherCard)
        ));
        if (cardsWithSameFace.length === 3) {
            result = true;
            return;
        }
    });
    return result;
}

function hasTwoPair(cards) {
    let facesWithPairs = new Set();
    cards.forEach((card) => {
        let cardsWithSameFace = cards.filter((otherCard) => (
            card.hasSameFaceAs(otherCard)
        ));
        if (cardsWithSameFace.length === 2) {
            facesWithPairs.add(card.getFace());
        }
    });
    return facesWithPairs.size === 2;
}

function hasPair(cards) {
    let result = false;
    cards.forEach((card) => {
        let cardsWithSameFace = cards.filter((otherCard) => (
            card.hasSameFaceAs(otherCard)
        ));
        if (cardsWithSameFace.length === 2) {
            result = true;
            return;
        }
    });
    return result;
}

class HandEvaluator {
    static evaluate(hand){
        let cards = hand.getCards();
        if (hasFourOfAKind(cards)) {
            return POKER_HANDS.FOUR_OF_A_KIND;
        }
        if (hasTrio(cards)) {
            return POKER_HANDS.THREE_OF_A_KIND;
        }
        if (hasTwoPair(cards)) {
            return POKER_HANDS.TWO_PAIR;
        }
        if (hasPair(cards)) {
            return POKER_HANDS.PAIR;
        }
        return POKER_HANDS.HIGH_CARD;
    }
}

export default HandEvaluator;