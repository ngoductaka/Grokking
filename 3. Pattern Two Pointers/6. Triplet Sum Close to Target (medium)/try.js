
// tìm dãy 3 số có tổng gần nhất với giá trị

const findTriplets = (arr,k ) => {
    const sortedList = arr.sort((a,b) => a-b);
    let result = 10000;
    let list = []
    for(i = 0; i<sortedList.length; i++) {
        if(i >0 && sortedList[i] === sortedList[i-1]) {
            continue;
        }
        const {diff, val} = fuc(sortedList, k, i , result);
        if(diff === 0) {
            console.log( val, val.reduce((cal, curr) => cal+curr, 0))
            return val.reduce((cal, curr) => cal+curr, 0)
        }
        if(diff<result) {
            console.log(val, val.reduce((cal, curr) => cal+curr, 0))
            result = diff
            list=val
        };
    }
    return list.reduce((cal, curr) => cal+curr, 0);
}

const fuc  = (arr, k, currIndex) => {
    let result = 10000;
    let val = []


    let start = currIndex+1, end = arr.length -1;

    while(start<end) {
        const currSum = arr[start] + arr[end] + arr[currIndex];
        const diff = Math.abs(currSum-k);
        if (diff === 0) {
            return {
                diff: 0,
                val: [arr[currIndex], arr[start] , arr[end]]
            }
        }
        if(diff <= result) {
            result = diff;
            val = [arr[currIndex], arr[start] , arr[end]]
        }
        // ==================
        if(currSum > k) end--
        else start ++
    }
    return {
        diff: result,
        val,
    }
}

console.log('__----------------', findTriplets([-2, 0, 1, 2], 2));
console.log('__----------------', findTriplets([-3, -1, 1, 2], 1));
console.log('__----------------', findTriplets([1, 0, 1, 1], 200));