// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

for (let numbers of scores) {
    if (minScore == undefined) {
        minScore = numbers;
    } else if (numbers < minScore) {
        minScore = numbers;
    };
};
console.log(minScore);
