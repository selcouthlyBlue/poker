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
        if (hasTrio(cards)) {
            return "THREE OF A KIND";
        }
        if (hasTwoPair(cards)) {
            return "TWO PAIR";
        }
        if (hasPair(cards)) {
            return "PAIR";
        }
        return "HIGH CARD";
    }
}

export default HandEvaluator;