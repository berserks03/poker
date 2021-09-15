import getHandDetails from "../helpers/getHandDetails";
import finalizer from "../helpers/finalizer";

const fiveCardDraw = (handsString) => {

    const handsArray = handsString.split(' ').map(item=>getHandDetails(item));

    return finalizer(handsArray);

}

export default fiveCardDraw;
