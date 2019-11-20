function fizzBuzz(n) 
{
    for(let i = 1; i <= n; i++)
    {
        //is number multiple of 3 and 5. could also do % 15
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log('fizzbuzz');
        }
        //is multiple of 5
        else if(i % 5 === 0)
        {
            console.log('buzz');
        }
        //is multiple of 3
        else if(i % 3 === 0)
        {
            console.log('fizz');
        }
        //else just print i
        else{
            console.log(i);
        }
    }
}