const str = 'aabccbb'

const findLongest = (str) => {
    let start = 0;
    let maxLength = 0;
    const check = {}
    for (let end = 0; end < str.length; end++) {
        const endChar = str.charAt(end);
        if (!check[endChar]) check[endChar] = 0;
        check[endChar] = check[endChar] + 1;
        while (Object.values(check).some(i => i > 1)) {
            const startChar = str.charAt(start);
            check[startChar] = check[startChar] - 1;
            if (check[startChar] < 1) {
                delete check[startChar];
            }
            start++;
        }
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            console.log(start, end)
        }

    }
    return maxLength;
}
console.log(str, findLongest(str));
console.log('abbbb', findLongest('abbbb'));
console.log('abccde', findLongest('abccde'));