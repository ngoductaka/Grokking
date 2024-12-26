const findTriplets = (arr) => {
    const sortedList = arr.sort();
    const result = [];
    for(i = 0; i<sortedList.length; i++) {
        if(i >0 && sortedList[i] === sortedList[i-1]) {
            continue;
        }
        fuc(sortedList, -sortedList[i], i+1, result);
        console.log(result)
    }
}

const fuc  = (arr, k, startInit, result) => {
    let start = startInit, end= arr.length -1;
    while(start<end) {
        const currSum = arr[start] + arr[end];
        if(currSum === k) result.push([-k, start, end]);
        else if(currSum > k) end--
        else start ++
    }
}

findTriplets([-3, 0, 1, 2, -1, 1, -2])