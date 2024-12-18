const fruit = ['A', 'B', 'C', 'B', 'B', 'C'];
const fruitIntoBaskets = (fruitList) => {
    let start = 0;
    let max = 0;
    const checkBaskets = {};
    for (let end = 0; end < fruitList.length; end++) {
        const fruitType = fruitList[end];
        if (!checkBaskets[fruitType]) {
            checkBaskets[fruitType] = 0;
        }
        checkBaskets[fruitType] += 1;
        while (Object.keys(checkBaskets).length > 2) {
            console.log('Object.keys(checkBaskets)', checkBaskets);
            const startFruit = fruitList[start];
            checkBaskets[startFruit] = checkBaskets[startFruit] - 1;
            if (checkBaskets[startFruit] <= 0) {
                delete checkBaskets[startFruit];
            }
            start++;
        }
        if (max < end - start + 1) {
            max = end - start + 1;
            console.log(start, end);
        }
    }
    return max;
}
console.log(fruitIntoBaskets(fruit))