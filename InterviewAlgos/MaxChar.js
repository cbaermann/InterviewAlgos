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
        //if exists then add to "counter"
        if(charMap[char] )
        {
            charMap[char]++;
        }
        //if does not exist set to value of 1
        else{
            charMap[char]=1;
        }
    }
    //checks for max and related char
    for(let char in charMap)
    {
        if(charMap[char]>max)
        {
            //set max to value
            max = charMap[char];
            //max char set to key
            maxChar = char;
        }
    }
    return maxChar;
}