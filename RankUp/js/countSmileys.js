//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
    arr.forEach(el => {
        if (isSmiley(el))
            count++;
    });
    return count;
}

function isSmiley(str){
    let charArray = str.split('');
    if (!(charArray.length === 2||charArray.length===3))
        return false;
    if (!isValidEye(charArray[0]))
        return false;
    if (charArray.length === 2)
        return isValidMouth(charArray[1]);
    if (charArray.length === 3)
        return isValidNose(charArray[1])&&isValidMouth(charArray[2]);
}

function isValidEye(char){
    return char === ':'|| char === ';';
}
function isValidMouth(char){
    return char === ')'|| char === 'D';
}
function isValidNose(char){
    return char === '-' || char === '~';
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
