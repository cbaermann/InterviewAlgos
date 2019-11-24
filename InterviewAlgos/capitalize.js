function capitalize(str) {
    //empty array
    const words = [];
    //eliminates spaces
    for(let word of str.split(' '))
    {
        //capitalizes first word of sentence
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
    
}