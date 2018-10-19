import Hand from "entity/Hand"
import Card from "entity/Card";
import SUITS from "entity/SUITS";
import FACES from "entity/FACES";
import HandEvaluator from "utils/HandEvaluator";

describe('Evaluate poker hands', () => {
    it('should give HIGH CARD when hand does not form a combination', () => {
        let hand = Hand([
            Card(SUITS.DIAMONDS, FACES.THREE),
            Card(SUITS.CLUBS, FACES.JACK),
            Card(SUITS.SPADES, FACES.EIGHT),
            Card(SUITS.HEARTS, FACES.FOUR),
            Card(SUITS.SPADES, FACES.TWO)
        ]);
        let result = HandEvaluator.evaluate(hand);
        expect(result).toEqual("HIGH CARD");
    });
});