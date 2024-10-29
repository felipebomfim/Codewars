function humanReadable (seconds) {
    let hh,mm,ss;
    hh = Math.floor(seconds/3600);
    mm = Math.floor((seconds - hh*3600)/60);
    ss = seconds - hh*3600 - mm*60;

    hh = String(hh).padStart(2,0);
    mm = String(mm).padStart(2,0);
    ss = String(ss).padStart(2,0);
    return `${hh}:${mm}:${ss}`;
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600));
console.log(humanReadable(45296));
console.log(humanReadable(86399));
console.log(humanReadable(86400));
console.log(humanReadable(359999));