const comboGenerator = (outerinput,length=5) => {

    const result = [];
    const output = [];
    result.length = length ;

    const combine = (input, len, start) => {
        if(len === 0) {
            output.push( result.join(" ") );
            return;
        }
        for (let i = start; i <= input.length - len; i++) {
            result[result.length - len] = input[i];
            combine(input, len-1, i+1 );
        }


    }

    combine( outerinput, result.length, 0);

    return output;
}

export default comboGenerator;
