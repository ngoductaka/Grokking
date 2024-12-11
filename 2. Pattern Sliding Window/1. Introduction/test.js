const findLongest = (str) => {
    let max = 0;
    let result = '';
    let start = 0;
    const check = {};
    for (let end = 0; end < str.length; end++) {
        const char = str.charAt(end);
        if (!check[char]) {
            check[char] = 0;
        }
        check[char] = check[char] + 1;
        result = str.substr(start, end+1);
        max = end - start + 1;
        while (check[char] > 1) {
            const startChar = str.charAt(start);
            check[startChar] = check[startChar] - 1; 
            if(!check[startChar]) {
                delete check[startChar];
            }
            start = start + 1;
        }
    }
    console.log(result,max);
    return max;
}

// findLongest('abccaadabcdefbcd');
// findLongest('asdfghjkl');
// findLongest('asdfghjkal');

const restructureArray = (arr) => {
    const numeral = [];
    const alphabets = []
    arr.map(item => {
        if(typeof item === 'string'){
            alphabets.push(item)
        } else if(typeof item === 'number') {
            numeral.push(item)
        }
    })
    const result = numeral.concat(alphabets)
    console.log(result);
    return result;

}
// restructureArray([2, "b", 4, "d", 3, "a", "c", "e", 5, 1])
