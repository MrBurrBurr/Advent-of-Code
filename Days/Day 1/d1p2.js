const fs = require('fs');
fs.readFile('input', (err, data) => solve(data.toString().split("\r\n").map(x=>+x)));

function solve(array) {
  for (let i=0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      for (let k=j+1; k < array.length; k++) {
        if ((array[i] + array[j] + array[k]) === 2020) console.log('the answer is: ', array[i] * array[j] * array[k])
      }
    }
  }
}