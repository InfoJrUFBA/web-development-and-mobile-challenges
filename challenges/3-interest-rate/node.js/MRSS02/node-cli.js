//Run this program with node.js using the following command: node node-cli.js

const readline = require("readline");

let value0;
let value1;


function final(a, b) {
  let c = b / 4
  c = Math.floor(c)
  let finalvalue = a
  for (x = 0; x < c; x++) {
    finalvalue *= 1.1
  }
  let d = b - c
  let e = d / 2
  e = Math.floor(e)
  for (x = 0; x < e; x++) {
    finalvalue *= 1.05
  }
  e = d - e
  for (x = 0; x < e; x++) {
    finalvalue *= 1.025
  }
  finalvalue = finalvalue.toFixed(2)
  return `$ ${finalvalue}`
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
