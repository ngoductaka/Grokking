const func = (arr) => {
    let start = 0, end = arr.length -1, startIndex = null, endIndex = -1;
    
    while(start < end) {
        const valStart = arr[start]
        const valEnd = arr[end]
        for(let i = start;i<end;i++) {
            const val = arr[i];
            if(val < valStart && startIndex === null) {
                startIndex = start
            }
            if(val> valEnd) {
                endIndex = Math.max(endIndex, end)
            }
        }
        if(startIndex !== null && endIndex >-1) {
            console.log(startIndex, endIndex)
            return endIndex - startIndex + 1;
        } else {
            start ++;
            end --
        }
    }
    return 0
}

console.log('__', func([1, 2, 5, 3, 7, 10, 9, 12]))
console.log('__', func([1, 3, 2, 0, -1, 7, 10]))
console.log('__', func([1,7, 10]))
console.log('__', func([22,7,6]))