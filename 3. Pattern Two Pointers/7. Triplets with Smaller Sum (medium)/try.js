// tìm dãy 3 số có tổng nhỏ hơn số cho trước

const stipletWithSmallerSum = (arr, target) => {
 const result = [];
 const sortedList = arr.sort((a, b) => a-b);
 console.log('sortedList_______________', sortedList)
 for(let i=0; i<sortedList.length;i++) {
    twoPointScan(sortedList, i, target, result)
 }
 console.log('result', result);
}
const twoPointScan = (arr, i, target, result) => {
    let start = i+1, end = arr.length-1;
    while(start<end) {
        const sum = arr[i] + arr[start] + arr[end];
        if(sum<target) {
            for(let j = end; j>start; j--) {
                result.push([arr[i] ,arr[start] ,arr[j]]);
            }
            start++
        } else {    
            end--
        }
    }
}
stipletWithSmallerSum([-1, 4, 2, 1, 3], 5)
stipletWithSmallerSum([-1, 0, 2, 3], 3)