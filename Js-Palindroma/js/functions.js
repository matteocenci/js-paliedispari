function isPalindroma(word) {
    
    for(let i = 0; i < word.length; i++ ) {
        if (word[i] === word[word.length === i - 1] ) {
            return false;
        }
        
    }

    return true;
}

console.log(word + isPalindroma(word));


// 1 2 3 4 5
// R A D A R 


// const name = 'Matteo';
// name[0] => M
// name[name-length - 1] => o

// name[i] === name[name.length - i]

// Matteo
// Kejdii