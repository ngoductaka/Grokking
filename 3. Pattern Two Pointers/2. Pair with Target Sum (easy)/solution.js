const fuc  = (arr, k) => {
    let start = 0, end= arr.length -1;
    while(start<end) {
        const currSum = arr[start] + arr[end];
        if(currSum === k) return [start, end];
        else if(currSum > k) end--
        else start ++
    }
    return [-1, -1]
}

console.log(fuc([1, 2, 3, 4, 6], 6))
console.log(fuc([2, 5, 9, 11], 11))