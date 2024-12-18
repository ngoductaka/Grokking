const str = 'aabccbb'

const findLongest = (str, k) => {
    let start = 0;
    let maxLength = 0;
    const check = {}
    for (let end = 0; end < str.length; end++) {
        const endChar = str.charAt(end);
        if (!check[endChar]) check[endChar] = 0;
        check[endChar] = check[endChar] + 1;
        while (Object.values(check).some(i => i > k)) {
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
console.log('aabccbb', findLongest('aabccbb', 2));
console.log('abbcb', findLongest('abbcb', 1));
console.log('abccde', findLongest('abccde', 1));