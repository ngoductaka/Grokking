const solution = (str1, str2) => {
    let index1 = str1.length - 1, index2 = str2.length - 1;
    while(index1 >= 0  || index2 >= 0) {
        const i1 = getValidIndex(str1, index1);
        const i2 = getValidIndex(str2, index2);
        if(str1[i1] !== str2[i2]) {
            return false;
        } 
        if (i1 === 0 && i2 === 0) {
            return true;
        } 
        if(i1 !== 0 && i2 !== 0) {
            return true;
        }
        index1 = i1 -1;
        index2 = i2 -1;
    }
    return true;
}

const getValidIndex = (str, index) => {
    let nextIndex = index, count = 0;
    while (nextIndex >= 0  ) {
        if(str[nextIndex] == '#') {
            count++
        } else if( count>0 ) {
            count --
        } else {
            break;
        }
        nextIndex -- 
    }
    return nextIndex;
}

console.log(solution('xy#z', 'xzz#'))
console.log(solution('xy#z', 'xyz#'))
console.log(solution('xp#', 'xyz##'))
console.log(solution('xyw##rrmp', 'xy#w#rrmu#p'))