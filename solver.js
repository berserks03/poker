import fiveCardDraw from './solvers/five-card-draw';
import omahaHoldem from './solvers/omaha-holdem';
import texasHoldem from './solvers/texas-holdem';

export class Solver {

    process(line) {
        const lineArray = line.split(/(?<=^\S+)\s/);
        if (lineArray[0] === 'texas-holdem') {
            return texasHoldem(lineArray[1]);
        } else if (lineArray[0] === 'omaha-holdem') {
            return omahaHoldem(lineArray[1]);
        } else if (lineArray[0] === 'five-card-draw') {
            return fiveCardDraw(lineArray[1]);
        } else {
            return 'Something wrong with game type!'
        }
    }

}
