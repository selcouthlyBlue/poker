import Enum from "enum";

const POKER_HANDS = new Enum({
    HIGH_CARD: "HIGH CARD",
    PAIR: "PAIR",
    TWO_PAIR: "TWO PAIR",
    THREE_OF_A_KIND: "THREE_OF_A_KIND",
    FOUR_OF_A_KIND: "FOUR_OF_A_KIND"
});

export default POKER_HANDS;