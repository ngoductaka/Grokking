// biến list số thánh list số bình phương từ thấp => cao

const makeSquare = (arr) => {
    let end = arr.findIndex(i => i === 0);
    if(end <= 0 ) {
        if(arr[0] >0)
        return arr.map(i => i*i)
            else return arr.reverse().map(i => i*i)
    }
    let start = end - 1;
    const result = [0];
    end = end + 1;
    while(start >=0 || end < arr.length) {
        console.log({start, end})
        const squareStart = arr[start] * arr[start];
        const squareEnd = arr[end] * arr[end];
        if(squareStart <= squareEnd || end == arr.length) {
            result.push(squareStart);
            start --

        } else {
            result.push(squareEnd);
            end ++
        }
    }
    return result;
}
console.log(makeSquare([-3, -1, 0, 1, 2]))
console.log(makeSquare([-2, -1, 0, 2, 3]))
console.log(makeSquare([1, 2, 3]))
console.log(makeSquare([-2, -1, 0]))