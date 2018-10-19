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

    it('should give PAIR when hand has a pair', () => {
        let hand = Hand([
            Card(SUITS.HEARTS, FACES.ACE),
            Card(SUITS.DIAMONDS, FACES.ACE),
            Card(SUITS.CLUBS, FACES.EIGHT),
            Card(SUITS.SPADES, FACES.FOUR),
            Card(SUITS.HEARTS, FACES.SEVEN)
        ]);
        let result = HandEvaluator.evaluate(hand);
        expect(result).toEqual("PAIR");
    });

    it('should give TWO PAIR when hand has two different pairs', () => {
        let hand = Hand([
            Card(SUITS.CLUBS, FACES.FOUR),
            Card(SUITS.SPADES, FACES.FOUR),
            Card(SUITS.CLUBS, FACES.THREE),
            Card(SUITS.DIAMONDS, FACES.THREE),
            Card(SUITS.CLUBS, FACES.QUEEN)
        ]);
        let result = HandEvaluator.evaluate(hand);
        expect(result).toEqual("TWO PAIR");
    });
});