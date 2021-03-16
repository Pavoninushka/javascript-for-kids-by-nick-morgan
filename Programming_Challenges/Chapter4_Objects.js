    // #1

let scores = {};

scores.Pavel = 0;
scores["Svetlana"] = 0;
scores.Beliz = 0;
scores["Luca"] = 0;

scores.Pavel += 90;
scores.Beliz += 40;
scores.Svetlana += 100;
scores.Luca += 50;

console.log(scores);

    // #2

let myCrazyObject = {
    "name": "A ridiculuos object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal" : "Banana Shark"
};

let number123 = myCrazyObject["some array"][2].number;

console.log(number123);
