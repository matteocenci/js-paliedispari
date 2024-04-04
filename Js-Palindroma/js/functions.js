function isPalindroma(word) {
    
    for(let i = 0; i < word.length / 2; i++ ) {
        if (word[i] !== word[word.length === 1 - i] ) {
            return false;
        }
        
    }

    return true;
}



// 1 2 3 4 5
// R A D A R 


// const name = 'Matteo';
// name[0] => M
// name[name-length - 1] => o

// name[i] === name[name.length - i]

// Matteo
// Kejdii