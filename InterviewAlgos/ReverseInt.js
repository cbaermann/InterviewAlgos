function reverseInt(n) {
    const reversed = n
    // int to string
    .toString()
    //to array
    .split('')
    //reverse
    .reverse()
    //joins back
    .join('');
//returns to int, Math.sign determines +/- number
return parseInt(reversed) * Math.sign(n);
}