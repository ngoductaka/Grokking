// bài toán cờ hà lan ( sorting with 3 value 0,1,2)

const sortWith2Point = (arr) => {
    let start = 0, i= 0, end = arr.length-1;
    while(start<end) {
        console.log(i, start, end, arr)
        if(arr[i] ===0) {
            [arr[start], arr[i]] = [arr[i], arr[start]]
            i++
            start++
        } else if(arr[i] === 2) {
            [arr[end], arr[i]] = [arr[i], arr[end]]
            end--
        } else {
            i++
        }
    }
    console.log(arr)
}

sortWith2Point( [1, 0, 2, 1, 0])