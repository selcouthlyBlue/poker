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
        if (hasPair(cards)) {
            return "PAIR";
        }
        return "HIGH CARD";
    }
}

export default HandEvaluator;