const ComparingStringsContainingBackspaces = (str1, str2) => {
    console.log(cutStr(str1), cutStr(str2))
    return cutStr(str1) === cutStr(str2)
}

const cutStr = (str) => {
    const list = str.split('#');
    let result = '';
    console.log('list', list)
    if(list.length < 2) {
        return str
    }
    if(list.length < 3) {
        return list[0].slice(0, -1) + list[1]
    }
    for(let i = list.length-2; i>=0; i--) {
        const subStr = result + list[i];
        result = subStr?.slice(0, -1)
    }
    return result+list[list.length-1];
}

const fun = (str) => {
   end = 0, result = '';
   while(end < str.length) {
    if(str[end] == '#') {
        result = result.slice(0, -1)
    } else {
        result  += str[end];
    }
    
    console.log('result__', result)
    end ++ 
   }
   console.log('result', result)
}
const fun1 = (str) => {
   let result = '';
   for(let p =0 ; p< str.length; p++) {
    if(str[p] == '#') {
        result = result.slice(0, -1)
    } else {
        result  += str[p];
    }
    console.log('result__', result)
   }
   console.log('result', result)
}

// console.log(ComparingStringsContainingBackspaces("xy#z", "xzz#"))
// console.log(ComparingStringsContainingBackspaces("xy#z", "xz#y"))
// console.log(ComparingStringsContainingBackspaces("xy#z", "xz#y"))
// console.log(ComparingStringsContainingBackspaces("xywrrmp", "x#ru#p"))
console.log(fun("x#ru###p"))