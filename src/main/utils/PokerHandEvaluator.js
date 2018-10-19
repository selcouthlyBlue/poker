import POKER_HANDS from "utils/POKER_HANDS";
import FACES from "entity/FACES";

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

function isRoyalFlush(cards) {
    cards.sort((card, otherCard) => (card.compareByFace(otherCard)));
    return isStraightFlush(cards) && cards[0].getFace() === FACES.ACE;
}

function isStraightFlush(cards) {
    return isFlush(cards) && isStraight(cards);
}

function isFlush(cards) {
    let requiredSuit = cards[0].getSuit();
    return cards.every(card => card.getSuit() === requiredSuit);
}

function isStraight(cards) {
    cards.sort((card, otherCard) => (card.compareByFace(otherCard)));
    if (cards[0].getFace() === FACES.ACE && cards[1].getFace() === FACES.FIVE) {
        cards.shift();
    }
    return cards.every((card, index) => (
        index === cards.length - 1 || card.isOneRankHigherThan(cards[index + 1])
    ));
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

class PokerHandEvaluator {
    static evaluate(hand){
        let cards = hand.getCards();
        if (isRoyalFlush(cards)) {
            return POKER_HANDS.ROYAL_FLUSH;
        }
        if (isStraightFlush(cards)) {
            return POKER_HANDS.STRAIGHT_FLUSH;
        }
        if (isFullHouse(cards)) {
            return POKER_HANDS.FULL_HOUSE;
        }
        if (isFlush(cards)) {
            return POKER_HANDS.FLUSH;
        }
        if (isStraight(cards)) {
            return POKER_HANDS.STRAIGHT;
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

export default PokerHandEvaluator;