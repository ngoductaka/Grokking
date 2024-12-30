// // Quadruple Sum to Target tìm dãy 4 số có tổng bằng target

const QuadrupleSum = (arr, target) => {
    const sortedList = arr.sort((a, b) => a-b);
    const result = [];
    for(let i=0; i<sortedList.length;i++) {
        stipletWithSmallerSum(sortedList, i+1, target-sortedList[i], result)
    }
    console.log('result', result)
}
const stipletWithSmallerSum = (arr, startIndex, target, result) => {
    for(let i = startIndex; i<arr.length;i++) {
       twoPointScan(arr, i, target, result, startIndex)
    }
}
const twoPointScan = (arr, i, target, result, startIndex) => {
    let start = i+1, end = arr.length-1;
    while(start<end) {
        const sum = arr[i] + arr[start] + arr[end];
        if(sum===target) {
            result.push([arr[startIndex-1], arr[i], arr[start], arr[end]])
            start ++
            end --
        } else if(sum<target) {    
            start++
        } else {
            end--
        }
    }
}
QuadrupleSum([4, 1, 2, -1, 1, -3], 1)
QuadrupleSum([2, 0, -1, 1, -2, 2], 2)
// stipletWithSmallerSum([-1, 0, 2, 3], 3)

