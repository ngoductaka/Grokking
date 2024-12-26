const makeSquare = (arr) => {
    let start = 0, end = arr.length-1, maxPoint = arr.length -1;
    const result = new Array(arr.length).fill(0);
    while(start <= end) {
        const sqStart = arr[start] * arr[start]; 
        const sqEnd = arr[end] * arr[end];
        if(sqEnd > sqStart) {
            result[maxPoint]=sqEnd;
            end--
        }  else {
            result[maxPoint] = sqStart;
            start ++
        }
        maxPoint--
    }
    console.log(result)
}

console.log(makeSquare([-3, -1, 0, 1, 2]))
console.log(makeSquare([-2, -1, 0, 2, 3]))
console.log(makeSquare([1, 2, 3]))
console.log(makeSquare([-2, -1, 0]))