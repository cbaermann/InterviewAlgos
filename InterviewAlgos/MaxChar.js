function maxChar(str) {
    //initialize object
    const charMap = {};
    //set max to zero
    let max = 0;
    //will set the char with greatest frequency
    let maxChar = '';

    //maps list of chars as well as frequency
    for(let char of str)
    {
        if(charMap[char] )
        {
            charMap[char]++;
        }
        else{
            charMap[char]=1;
        }
    }
    //checks for max and related char
    for(let char in charMap)
    {
        if(charMap[char]>max)
        {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}