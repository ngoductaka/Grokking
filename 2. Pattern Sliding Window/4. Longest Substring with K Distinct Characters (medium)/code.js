

// tìm chuỗi dài nhất mà số các phần tử khác nhau ko qúa k
const longest = (str, k) => {
    let length = 0;
    let result = '';
    
    for(var i = 0; i <str.length; i++) {
        let re = str[i];
        let check = new Set();;
        check.add(str[i]);
        let notOver = true;
        let next = i;
        while(next < str.length-1 && notOver) {
            next = next + 1;
            const nextVal = str[next]
            re+=nextVal;
            check.add(nextVal);
            if(check.size > k) notOver = false;
            else if(length <= re.length) {
                result = re;
                length = re.length;
            }
        }
        console.log(check);
    }
    console.log('result', result);
    return result.length;
}
longest('cbbebi', 3)
// longest('araaci', 1)