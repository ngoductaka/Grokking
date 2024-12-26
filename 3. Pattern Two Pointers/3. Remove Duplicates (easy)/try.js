const removeDuplicate = (arr) => {
    let start = 1, end = 1;
    const result = []
    while(end<arr.length) {
        if(arr[start-1]!==arr[end]) {
            arr[start] = arr[end]
            start++
        }
        end++
    }
    arr.length = start
    console.log(start, arr)
}

removeDuplicate([2, 3, 3, 3, 6, 9, 9])
// removeDuplicate([2, 2, 2, 11])