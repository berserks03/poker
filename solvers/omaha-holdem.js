import comboGenerator from "../helpers/comboGeneratorOmaha";
import cardStringSplitter from "../helpers/cardStringSplitter";
import finalizer from "../helpers/finalizer";
const omahaHoldem = (cardsString) => {

    const [board, prehands] = cardStringSplitter(cardsString);

    const hands = comboGenerator(board, prehands).map(x=>({hand: x.hand, rank: x.comb.rank, value: x.comb.value}));

    return finalizer(hands);

}

export default omahaHoldem;
