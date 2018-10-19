import POKER_HANDS from "utils/POKER_HANDS";

function isFullHouse(cards) {
    let faceWithTrio;
    cards.forEach((card) => {
        let cardsWithSameFace = cards.filter((otherCard) => (
            card.hasSameFaceAs(otherCard)
        ));
        if (cardsWithSameFace.length === 3) {
            faceWithTrio = card.getFace();
            return;
        }
    });
    if (faceWithTrio) {
        let cardsWithTrioRemoved = cards.filter((card) => (
            card.getFace() !== faceWithTrio
        ));
        return hasPair(cardsWithTrioRemoved);
    }
    return false;
}

function hasFourOfAKind(cards) {
    return hasNumberOfCardsOfAKind(cards, 4);
}

function isFlush(cards) {
    let requiredSuit = cards[0].getSuit();
    return cards.every(card => card.getSuit() === requiredSuit);
}

function hasNumberOfCardsOfAKind(cards, requiredNumberOfCards) {
    let result = false;
    cards.forEach((card) => {
        let cardsWithSameFace = cards.filter((otherCard) => (card.hasSameFaceAs(otherCard)));
        if (cardsWithSameFace.length === requiredNumberOfCards) {
            result = true;
            return;
        }
    });
    return result;
}

function hasTrio(cards) {
    return hasNumberOfCardsOfAKind(cards, 3);
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
    return hasNumberOfCardsOfAKind(cards, 2);
}

class HandEvaluator {
    static evaluate(hand){
        let cards = hand.getCards();
        if (isFullHouse(cards)) {
            return POKER_HANDS.FULL_HOUSE;
        }
        if (isFlush(cards)) {
            return POKER_HANDS.FLUSH;
        }
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