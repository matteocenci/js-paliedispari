function isPalindroma(word) {
    let word = prompt("Dammi una parola: ");
    console.log(word);
    let wordSplit = word.split('');
    console.log(wordSplit);
    let resultWord;
    
    for(let i = 0; i < word.length; i++ ) {
        if (word[i] === word[word.length - i] ) {
            resultWord = true;
        }
        
        resultWord = false;
    }

    return resultWord;
}



// 1 2 3 4 5
// R A D A R 


// const name = 'Matteo';
// name[0] => M
// name[name-length - 1] => o

// name[i] === name[name.length - i]

// Matteo
// Kejdii