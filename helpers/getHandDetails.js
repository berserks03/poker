const order = "23456789TJQKA";
const getHandDetails = (hand) => {
    const cards = hand.match(/..?/g);
    const ranks = cards.map(a => String.fromCharCode([77 - order.indexOf(a[0])])).sort();
    const suits = cards.map(a => a[1]).sort();
    const counts = ranks.reduce(count, {});
    const duplicates = Object.values(counts).reduce(count, {});
    const flush = suits[0] === suits[4];
    const first = ranks[0].charCodeAt(0);
    const lowStraight = ranks.join("") === "AJKLM";
    ranks[0] = lowStraight ? "N" : ranks[0];
    const straight = lowStraight || ranks.every((f, index) => f.charCodeAt(0) - first === index);
    const rank =
        (flush && straight && 1) ||
        (duplicates[4] && 2) ||
        (duplicates[3] && duplicates[2] && 3) ||
        (flush && 4) ||
        (straight && 5) ||
        (duplicates[3] && 6) ||
        (duplicates[2] > 1 && 7) ||
        (duplicates[2] && 8) ||
        9;

    return { hand: hand, rank, value: ranks.sort(byCountFirst).join("") };

    function byCountFirst(a, b) {
        //Counts are in reverse order - bigger is better
        const countDiff = counts[b] - counts[a]
        if (countDiff) return countDiff // If counts don't match return
        return b > a ? -1 : b === a ? 0 : 1
    }

    function count(c, a) {
        c[a] = (c[a] || 0) + 1
        return c
    }
}

export default getHandDetails;
