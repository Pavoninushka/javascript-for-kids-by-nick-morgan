let name = "Svetlana";
if (name === "Galina") {
    // console.log("Hello me");
} else if (name === "Svetlana") {
    console.log("Hello Svetlana");
} else if (name === "Yuriy") {
    console.log("Hello Yuriy");
} else {
    console.log("Hello stranger");
}

for (let i = 3; i <= 3000; i *= 3) {
    console.log(i);
}

let x = 3;
while (x <= 3000) {
    console.log(x);
    x *= 3;
}

    // #1

let animals = ["cat", "dog", "snake", "mouse", "cow"];

for (let i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i] ;
}

console.log(animals);

    // #2

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let randomString = "";
let stringLength = 6;

while (randomString.length < stringLength) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);

    // #3

let input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i ++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0"
    } else {
        output += input[i];
    }
}

console.log(output)