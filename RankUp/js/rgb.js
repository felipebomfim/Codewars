function rgb(r, g, b) {
    r = Math.min(r,255);
    r = Math.max(r,0);
    g = Math.min(g,255);
    g = Math.max(g,0);
    b = Math.min(b,255);
    b = Math.max(b,0);
    let rString = String(r.toString(16)).padStart(2,'0').toUpperCase();
    let gString = String(g.toString(16)).padStart(2,'0').toUpperCase();
    let bString = String(b.toString(16)).padStart(2,'0').toUpperCase();
    return rString+gString+bString;
}

console.log(rgb(255,255,255))
console.log(rgb(255,255,300))
console.log(rgb(0,0,0))
console.log(rgb(148,0,211))