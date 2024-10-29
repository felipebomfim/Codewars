function getMiddle(s){
  //Code goes here!
  let isOddString = s.length%2===1?true:false;
  let indexOfChar = Math.floor(s.length/2);
  if (isOddString){
    return s[indexOfChar];
  } else {
    return `${s[indexOfChar-1]}${s[indexOfChar]}`
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));