function validBraces(braces){
    let bracesArray = braces.split("");
    let stack = []
    for (let i=0; i<bracesArray.length; i++){
        if (bracesArray[i]==="("||bracesArray[i]==="["||bracesArray[i]==="{")
            stack.push(bracesArray[i])
        else {
            if (stack.length === 0)
                return false;
            switch(bracesArray[i]){
                case ")":
                    if (stack[stack.length-1]==="(")
                        stack.pop()
                    else
                        return false;
                    break;
                case "]":
                    if (stack[stack.length-1]==="[")
                        stack.pop()
                    else
                        return false;
                    break;
                case "}":
                    if (stack[stack.length-1]==="{")
                        stack.pop()
                    else
                        return false;
                    break;
            }
        }
    }
    return stack.length === 0;
}

console.log(validBraces("(){}[]"))
console.log(validBraces("([{}])"))
console.log(validBraces("(}"))
console.log(validBraces("[(])"))
console.log(validBraces("[({})](]"))