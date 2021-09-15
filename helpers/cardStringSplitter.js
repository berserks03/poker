const cardStringSplitter = (cardsString) => {

    const space = cardsString.indexOf(" ");

    const board = cardsString.substr(0, space);

    const prehands = cardsString.substr(space + 1);

    return [board, prehands];
}

export default cardStringSplitter;
