const pair_with_targersum = (arr, k) => {
    const result = [];
    const fun = (start, end) => {
        if(start >= end ) {
            return 0
        } 
        const sum = arr[start] + arr[end];
        if(sum === k) {
            result.push(`${start},${end}`)
            return fun(start+1, end-1)
        } else if(sum>k) {
            return fun(start, end-1)
        } else {
            return fun(start+1, end)
        }
    }
    fun(0, arr.length -1);
    console.log(result);
}

pair_with_targersum([1, 2, 3, 4, 6], 6)
pair_with_targersum([2, 5, 9, 11], 11)