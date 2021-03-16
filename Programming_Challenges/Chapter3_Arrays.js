    // #1 - 4

let names = ["Asli", "Amanda", "Pavel", "Svetlana", "Luca"];
let adjectives = ["smart", "handsome", "clever", "tricky"];
let nouns = ["queen", "prince", "chicken", "pig"];

let randomName = names[Math.floor(Math.random() * names.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

let randomPhraseOne = [randomName, "is a", randomAdjective, randomNoun, "!!!"].join(" ");
let randomPhraseTwo = randomName + " is a " + randomAdjective + " " + randomNoun + " !!!";

console.log(randomPhraseOne);
console.log(randomPhraseTwo);

let array = [3, 2, 1];

let item1 = array.pop();
let item2 = array.pop();
let item3 = array.pop();

let newString = [item3, " is bigger than ", item2, " is bigger than ", item1].join(" ");

console.log(newString);