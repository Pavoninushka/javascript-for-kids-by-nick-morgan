// #1
 let sum = function (x, y) {
    return x + y;
 };

function multiply (z, w) {
    return z * w;
}

let result = sum (multiply(36325, 9824), 777);

console.log(result);

    // #2

let areArraySame = function (array1, array2) {
    if (array1.length !== array2.length){
        return false;
    } if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++){
            if (array1[i] !== array2[i]) {
                return false;
            }
        }   return true;
    }
}

console.log(areArraySame([1,2,3], [1,2,3,4]));

// #3

let pickWord = function () {
    let words = [
        "cat",
        "javascript",
        "coding",
        "pavel",
        "mamma"
    ];
    return words[Math.floor(Math.random() * words.length)];
};

let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "))
};

let getGuess = function () {
    return prompt("Guess a letter, or click Cancel to stop playing.")
};

let updatedGameState = function (guess, word, answerArray) {
    let matches = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i] === guess) {
            answerArray[i] = guess;
            matches++;
        }
    }
    return matches;
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Good job! The answer was " + answerArray.join(""));
};

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0 ) {
    showPlayerProgress(answerArray);

    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let correctGuesses = updatedGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);