const list1 = [2, 1, 5, 2, 3, 2]
const k1 = 3;

const find = (list, k) => {
    const resultList = [];
    let startIndex = 0;
    let total = 0;
    for (let endIndex = 0; endIndex < list.length; endIndex++) {
        total += list[endIndex];
        if(endIndex >= k-1) {
            resultList.push(total / k);
            total = total - list[startIndex];
            startIndex += 1
        }
    }
    console.log(resultList)

}
find(list1, k1);