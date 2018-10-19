import Hand from "entity/Hand"
import Card from "entity/Card";
import SUITS from "entity/SUITS";
import FACES from "entity/FACES";
import HandEvaluator from "utils/HandEvaluator";
import POKER_HANDS from "utils/POKER_HANDS";

describe('Evaluate poker hands', () => {
    let hand = [];

    function handShouldEvaluateTo(expected) {
        expect(HandEvaluator.evaluate(hand)).toEqual(expected);
    }



    it('should give HIGH CARD when hand does not form a combination', () => {
        hand = Hand([
            Card(SUITS.DIAMONDS, FACES.THREE),
            Card(SUITS.CLUBS, FACES.JACK),
            Card(SUITS.SPADES, FACES.EIGHT),
            Card(SUITS.HEARTS, FACES.FOUR),
            Card(SUITS.SPADES, FACES.TWO)
        ]);
        handShouldEvaluateTo(POKER_HANDS.HIGH_CARD);
    });

    it('should give PAIR when hand has a pair', () => {
        hand = Hand([
            Card(SUITS.HEARTS, FACES.ACE),
            Card(SUITS.DIAMONDS, FACES.ACE),
            Card(SUITS.CLUBS, FACES.EIGHT),
            Card(SUITS.SPADES, FACES.FOUR),
            Card(SUITS.HEARTS, FACES.SEVEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.PAIR);
    });

    it('should give TWO PAIR when hand has two different pairs', () => {
        hand = Hand([
            Card(SUITS.CLUBS, FACES.FOUR),
            Card(SUITS.SPADES, FACES.FOUR),
            Card(SUITS.CLUBS, FACES.THREE),
            Card(SUITS.DIAMONDS, FACES.THREE),
            Card(SUITS.CLUBS, FACES.QUEEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.TWO_PAIR);
    });

    it('should give THREE OF A KIND when hand has a trio', () => {
        hand = Hand([
            Card(SUITS.CLUBS, FACES.SEVEN),
            Card(SUITS.DIAMONDS, FACES.SEVEN),
            Card(SUITS.SPADES, FACES.SEVEN),
            Card(SUITS.CLUBS, FACES.KING),
            Card(SUITS.DIAMONDS, FACES.THREE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.THREE_OF_A_KIND);
    });

    it('should give FOUR OF A KIND when hand has a four cards with the same face', () => {
        hand = Hand([
            Card(SUITS.CLUBS, FACES.JACK),
            Card(SUITS.DIAMONDS, FACES.JACK),
            Card(SUITS.SPADES, FACES.JACK),
            Card(SUITS.CLUBS, FACES.JACK),
            Card(SUITS.DIAMONDS, FACES.SEVEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.FOUR_OF_A_KIND);
    });

    it('should give FLUSH when hand has five cards of the same suit', () => {
        hand = Hand([
            Card(SUITS.CLUBS, FACES.FOUR),
            Card(SUITS.CLUBS, FACES.JACK),
            Card(SUITS.CLUBS, FACES.EIGHT),
            Card(SUITS.CLUBS, FACES.TWO),
            Card(SUITS.CLUBS, FACES.NINE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.FLUSH);
    })

    it('should give FULL HOUSE when hand has a trio and a pair', () => {
        hand = Hand([
            Card(SUITS.HEARTS, FACES.TEN),
            Card(SUITS.DIAMONDS, FACES.TEN),
            Card(SUITS.SPADES, FACES.TEN),
            Card(SUITS.CLUBS, FACES.NINE),
            Card(SUITS.DIAMONDS, FACES.NINE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.FULL_HOUSE);
    });

    it('should give STRAIGHT when hand has five cards that are consecutive in face value', () => {
        hand = Hand([
            Card(SUITS.HEARTS, FACES.NINE),
            Card(SUITS.DIAMONDS, FACES.FIVE),
            Card(SUITS.SPADES, FACES.SIX),
            Card(SUITS.CLUBS, FACES.SEVEN),
            Card(SUITS.DIAMONDS, FACES.EIGHT)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT);
    });

    it('should give STRAIGHT when hand has five cards that are consecutive in face value and the highest card is an Ace', () => {
        hand = Hand([
            Card(SUITS.HEARTS, FACES.KING),
            Card(SUITS.DIAMONDS, FACES.TEN),
            Card(SUITS.SPADES, FACES.QUEEN),
            Card(SUITS.CLUBS, FACES.ACE),
            Card(SUITS.DIAMONDS, FACES.JACK)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT);
    })

    it('should give STRAIGHT when hand has five cards that are consecutive in face value and the high card is a Five', () => {
        hand = Hand([
            Card(SUITS.HEARTS, FACES.ACE),
            Card(SUITS.DIAMONDS, FACES.THREE),
            Card(SUITS.SPADES, FACES.TWO),
            Card(SUITS.CLUBS, FACES.FIVE),
            Card(SUITS.DIAMONDS, FACES.FOUR)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT);
    });

    it('should give STRAIGHT FLUSH when hand has five cards that are consecutive in face value and are of the same suit', () => {
        hand = Hand([
            Card(SUITS.CLUBS, FACES.FOUR),
            Card(SUITS.CLUBS, FACES.SIX),
            Card(SUITS.CLUBS, FACES.SEVEN),
            Card(SUITS.CLUBS, FACES.EIGHT),
            Card(SUITS.CLUBS, FACES.FIVE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT_FLUSH);
    });

    it('should give ROYAL FLUSH when hand is a STRAIGHT FLUSH and the high card is an ace', () => {
        hand = Hand([
            Card(SUITS.DIAMONDS, FACES.ACE),
            Card(SUITS.DIAMONDS, FACES.JACK),
            Card(SUITS.DIAMONDS, FACES.KING),
            Card(SUITS.DIAMONDS, FACES.QUEEN),
            Card(SUITS.DIAMONDS, FACES.TEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.ROYAL_FLUSH);
    });
});