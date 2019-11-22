function anagrams(stringA, stringB) {
    //calls helper function 
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    //if mapA and mapB are not the same length it is not an anagram
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    {
        return false;
    }
    //compares key of mapA to mapB
    for(let char in  aCharMap)
    {
        if(aCharMap[char] !== bCharMap[char])
        {
            return false;
        }
    }
    return true;


}
//helper function

function buildCharMap(str)
{
    //empty map
    const charMap = {};
    
    //regex to eliminate special characters or spaces
    for(let char of str.replace(/[^\w]/g, '').toLowerCase())
    {
        //incriments count on char, or if not existant adds initial number.
        charMap[char] = charMap[char]+1 || 1;
    }
    return charMap;
}