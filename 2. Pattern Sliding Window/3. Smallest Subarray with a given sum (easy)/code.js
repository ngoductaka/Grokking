const list = [2, 1, 5, 2, 3, 2]
const k = 3;

const findSmall = () => {
    let startIndex = 0;

    let total = 0;
    let minCount = list.length + 1;
    for (let endIndex = 0; endIndex < list.length; endIndex++) {
        total += list[endIndex];
        if (total >= k) {
            console.log({minCount, endIndex, startIndex})
            if (minCount > endIndex - startIndex + 1)
                minCount = endIndex - startIndex + 1;
            startIndex += 1;
            total -= list[startIndex];
        }
    }
    console.log(minCount, total);

}
findSmall();