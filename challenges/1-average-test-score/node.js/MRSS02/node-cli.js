//Run this program using the following command: node node-cli.js

const readline = require("readline")

let value0
let value1
let value2

function final(a, b, c) {
  let d = a + b + c
  d = d / 3
  d = d.toFixed(1)
  return `FINAL SCORE: ${d}`
}

let read0 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

read0.question("Insert 3 numerical values from 0 to 10, using up to 1 decimal places; separated by spacebar\n", function(answer) {
    [value0, value1, value2] = answer.split(" ")
    value0 = parseFloat(value0, 10)
    value1 = parseFloat(value1, 10)
    value2 = parseFloat(value2, 10)
    if (value0 != value0.toFixed(1) || value1 != value1.toFixed(1) ||
    value2 != value2.toFixed(1) || value0 > 10 || value0 < 0 ||
    value1 > 10 || value1 < 0 ||  value2 > 10 || value2 < 0) console.log("Invalid values!");
    else console.log(final(value0, value1, value2));
    read0.close();
});
