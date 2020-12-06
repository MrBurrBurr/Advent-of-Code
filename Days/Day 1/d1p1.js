const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n').map(x => +x);

let result = 0;

for (let i = 0; i < lines.length; i++) {
  for (let j = i + 1; j < lines.length; j++) {
    if ((lines[i] + lines[j]) === 2020) result = lines[i] * lines[j];
  }
}

console.log('the answer is:', result);