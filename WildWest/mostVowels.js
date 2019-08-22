function mostVowels(phrase){
    if(!phrase) return null;
    let vowels = ['a','e','i','o','u'];
    let maxVowels = 0;
    let maxWord;
    
    let words = phrase.split(' ');
    words.forEach((word) => {
        let currentVowels = 0;
        for(var char in word){
            if(vowels.includes(word[char.toLowerCase()])){
                currentVowels++;
            }
        }
        if(currentVowels > maxVowels){
            maxVowels = currentVowels;
            maxWord = word;
        }
    });
    return maxWord;
}