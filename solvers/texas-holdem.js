import getHandDetails from "../helpers/getHandDetails";
import comboGenerator from "../helpers/comboGeneratorTexas";
import cardStringSplitter from "../helpers/cardStringSplitter";
import finalizer from "../helpers/finalizer";

const texasHoldem = (cardsString) => {

    const [board, prehands] = cardStringSplitter(cardsString);

    const hands = prehands.split(" ")
                        .map((x)=>({hand: x, comb: comboGenerator((x+board).match(/..?/g))
                                                                        .map(item=>getHandDetails(item.replace(/\s/g, "")))
                                                                        .sort((a, b) => {return a.rank - b.rank || a.value.localeCompare(b.value)})[0]}))
                        .map(x=>({hand: x.hand, rank: x.comb.rank, value: x.comb.value}));

    return finalizer(hands);
}

export default texasHoldem;
