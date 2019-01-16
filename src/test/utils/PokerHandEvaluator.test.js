import Hand from "entity/Hand"
import PlayingCard from "entity/deck-of-playing-cards/PlayingCard";
import SUITS from "entity/deck-of-playing-cards/SUITS";
import FACES from "entity/deck-of-playing-cards/FACES";
import PokerHandEvaluator from "utils/PokerHandEvaluator";
import POKER_HANDS from "utils/POKER_HANDS";

describe('Evaluate poker hands', () => {
    let hand = [];
	console.log('hello');

    function handShouldEvaluateTo(expected) {
        expect(PokerHandEvaluator.evaluate(hand)).toEqual(expected);
    }



    it('should give HIGH CARD when hand does not form a combination', () => {
        hand = Hand([
            PlayingCard(SUITS.DIAMONDS, FACES.THREE),
            PlayingCard(SUITS.CLUBS, FACES.JACK),
            PlayingCard(SUITS.SPADES, FACES.EIGHT),
            PlayingCard(SUITS.HEARTS, FACES.FOUR),
            PlayingCard(SUITS.SPADES, FACES.TWO)
        ]);
        handShouldEvaluateTo(POKER_HANDS.HIGH_CARD);
    });

    it('should give PAIR when hand has a pair', () => {
        hand = Hand([
            PlayingCard(SUITS.HEARTS, FACES.ACE),
            PlayingCard(SUITS.DIAMONDS, FACES.ACE),
            PlayingCard(SUITS.CLUBS, FACES.EIGHT),
            PlayingCard(SUITS.SPADES, FACES.FOUR),
            PlayingCard(SUITS.HEARTS, FACES.SEVEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.PAIR);
    });

    it('should give TWO PAIR when hand has two different pairs', () => {
        hand = Hand([
            PlayingCard(SUITS.CLUBS, FACES.FOUR),
            PlayingCard(SUITS.SPADES, FACES.FOUR),
            PlayingCard(SUITS.CLUBS, FACES.THREE),
            PlayingCard(SUITS.DIAMONDS, FACES.THREE),
            PlayingCard(SUITS.CLUBS, FACES.QUEEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.TWO_PAIR);
    });

    it('should give THREE OF A KIND when hand has a trio', () => {
        hand = Hand([
            PlayingCard(SUITS.CLUBS, FACES.SEVEN),
            PlayingCard(SUITS.DIAMONDS, FACES.SEVEN),
            PlayingCard(SUITS.SPADES, FACES.SEVEN),
            PlayingCard(SUITS.CLUBS, FACES.KING),
            PlayingCard(SUITS.DIAMONDS, FACES.THREE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.THREE_OF_A_KIND);
    });

    it('should give FOUR OF A KIND when hand has a four cards with the same face', () => {
        hand = Hand([
            PlayingCard(SUITS.CLUBS, FACES.JACK),
            PlayingCard(SUITS.DIAMONDS, FACES.JACK),
            PlayingCard(SUITS.SPADES, FACES.JACK),
            PlayingCard(SUITS.CLUBS, FACES.JACK),
            PlayingCard(SUITS.DIAMONDS, FACES.SEVEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.FOUR_OF_A_KIND);
    });

    it('should give FLUSH when hand has five cards of the same suit', () => {
        hand = Hand([
            PlayingCard(SUITS.CLUBS, FACES.FOUR),
            PlayingCard(SUITS.CLUBS, FACES.JACK),
            PlayingCard(SUITS.CLUBS, FACES.EIGHT),
            PlayingCard(SUITS.CLUBS, FACES.TWO),
            PlayingCard(SUITS.CLUBS, FACES.NINE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.FLUSH);
    })

    it('should give FULL HOUSE when hand has a trio and a pair', () => {
        hand = Hand([
            PlayingCard(SUITS.HEARTS, FACES.TEN),
            PlayingCard(SUITS.DIAMONDS, FACES.TEN),
            PlayingCard(SUITS.SPADES, FACES.TEN),
            PlayingCard(SUITS.CLUBS, FACES.NINE),
            PlayingCard(SUITS.DIAMONDS, FACES.NINE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.FULL_HOUSE);
    });

    it('should give STRAIGHT when hand has five cards that are consecutive in face value', () => {
        hand = Hand([
            PlayingCard(SUITS.HEARTS, FACES.NINE),
            PlayingCard(SUITS.DIAMONDS, FACES.FIVE),
            PlayingCard(SUITS.SPADES, FACES.SIX),
            PlayingCard(SUITS.CLUBS, FACES.SEVEN),
            PlayingCard(SUITS.DIAMONDS, FACES.EIGHT)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT);
    });

    it('should give STRAIGHT when hand has five cards that are consecutive in face value and the highest card is an Ace', () => {
        hand = Hand([
            PlayingCard(SUITS.HEARTS, FACES.KING),
            PlayingCard(SUITS.DIAMONDS, FACES.TEN),
            PlayingCard(SUITS.SPADES, FACES.QUEEN),
            PlayingCard(SUITS.CLUBS, FACES.ACE),
            PlayingCard(SUITS.DIAMONDS, FACES.JACK)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT);
    })

    it('should give STRAIGHT when hand has five cards that are consecutive in face value and the high card is a Five', () => {
        hand = Hand([
            PlayingCard(SUITS.HEARTS, FACES.ACE),
            PlayingCard(SUITS.DIAMONDS, FACES.THREE),
            PlayingCard(SUITS.SPADES, FACES.TWO),
            PlayingCard(SUITS.CLUBS, FACES.FIVE),
            PlayingCard(SUITS.DIAMONDS, FACES.FOUR)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT);
    });

    it('should give STRAIGHT FLUSH when hand has five cards that are consecutive in face value and are of the same suit', () => {
        hand = Hand([
            PlayingCard(SUITS.CLUBS, FACES.FOUR),
            PlayingCard(SUITS.CLUBS, FACES.SIX),
            PlayingCard(SUITS.CLUBS, FACES.SEVEN),
            PlayingCard(SUITS.CLUBS, FACES.EIGHT),
            PlayingCard(SUITS.CLUBS, FACES.FIVE)
        ]);
        handShouldEvaluateTo(POKER_HANDS.STRAIGHT_FLUSH);
    });

    it('should give ROYAL FLUSH when hand is a STRAIGHT FLUSH and the high card is an ace', () => {
        hand = Hand([
            PlayingCard(SUITS.DIAMONDS, FACES.ACE),
            PlayingCard(SUITS.DIAMONDS, FACES.JACK),
            PlayingCard(SUITS.DIAMONDS, FACES.KING),
            PlayingCard(SUITS.DIAMONDS, FACES.QUEEN),
            PlayingCard(SUITS.DIAMONDS, FACES.TEN)
        ]);
        handShouldEvaluateTo(POKER_HANDS.ROYAL_FLUSH);
    });
});