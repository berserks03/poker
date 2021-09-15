import comboGeneratorTexas from "./comboGeneratorTexas";
import getHandDetails from "./getHandDetails";
const comboGenerator = (board, prehands) => {
    const boardVariants =  comboGeneratorTexas(board.match(/..?/g), 3).map(x=>x.replace(/\s/g, ""));

    return prehands.split(" ")
                .map(x=>({hand:x, comb:comboGeneratorTexas(x.match(/..?/g), 2).map(x=>x.replace(/\s/g, ""))
                                                                                .flatMap(d=>boardVariants.map(v => d + v))
                                                                                .map(x=>getHandDetails(x))
                                                                                .sort((a, b) => {return a.rank - b.rank || a.value.localeCompare(b.value)})[0]}));
}

export default comboGenerator;
