var countBits = function(n) {
    // Program Me
    let binary = n.toString(2);
    let count = 0;
    for(let i=0; i<binary.length;i++){
        if (binary[i]=='1')
            count++;
    }
    return count;
};

console.log(countBits(1));
console.log(countBits(1234));
console.log(countBits(7));