function palindrome(str) 
{
    //create empty string
    let reversed = "";
    for(let char of str)
    {
        //append each char to front of reversed
        reversed = char + reversed;
    }
    //check if reversed string is palindrome
    if(str === reversed)
        return true;
        
    return false;
}