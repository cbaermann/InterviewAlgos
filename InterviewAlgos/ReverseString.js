function reverse(str) 
{
    //create empty string
    let reversed = "";
    for(let char of str)
    {
        //append each char to the front of the empty string
        reversed = char + reversed;
    }
    //return reversed string
    return reversed;
}