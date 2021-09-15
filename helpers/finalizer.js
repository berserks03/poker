const finalizer = (array) => {

    return array.sort((a, b) => {return b.rank - a.rank
                                || b.value.localeCompare(a.value)
                                || (b.value.localeCompare(a.value) === 0 ? a.hand.localeCompare(b.hand): 0)})
                .map((item,index, array)=> {
                    if (index !== array.length - 1) {
                        if (array[index].value === array[index + 1].value) {
                            return item.hand + "="
                        } else {
                            return item.hand + " "
                        }
                    } else {
                        return item.hand
                    }
                })
                .reduce((acc, curr)=> acc+curr);
}

export default finalizer;
