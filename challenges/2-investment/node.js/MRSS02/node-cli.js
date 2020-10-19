//Run this program with node.js using the following command: node node-cli.js

const readline = require("readline")

let value0
let value1


function final(a, b) {
  let d = a * 0.5
  let e = d * 0.05
  for (x = 0; x < b; x++) {
    d += e
  }
  return `R$ ${d}`
}

let read0 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

read0.question("Insert two positive numerical values; separated by spacebar\n", function(answer) {
  [value0, value1] = answer.split(" ")
  value0 = parseFloat(value0, 10)
  value1 = parseFloat(value1, 10)
  if (value0 < 0 || value1 < 0) console.log("Invalid value(s)!");
  else console.log(final(value0, value1));
  read0.close();
});
