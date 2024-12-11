// tìm chuỗi dài nhất mà số các phần tử khác nhau ko qúa k
// dùng 2 con trỏ start and end => trượt và check

const longest = (str, k) => {
    let windowStart = 0, check = {}; length = 0;
    for (let windowEnd = windowStart; windowEnd < str.length; windowEnd++) {
        const charEnd = str.charAt(windowEnd);
        check[charEnd] = Math.abs(~check[charEnd]);
        while (Object.keys(check).length > k) {
            const startChar = str.charAt(windowStart)
            windowStart++;
            check[startChar] = check[startChar] - 1;
            if (check[startChar] < 1) {
                delete check[startChar]
            }
        }
        if ((windowEnd - windowStart + 1) >= length) {
            length = (windowEnd - windowStart + 1);
            console.log(length, str.substring(windowStart, windowEnd+1));
        }
    }
    return length;
}
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
console.log('test2_____', longest('araaci', 1))

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
console.log('test1____', longest('araaci', 2))


// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

console.log('test3_______', longest('cbbebi', 3))

