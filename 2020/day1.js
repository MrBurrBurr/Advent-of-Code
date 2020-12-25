const fs = require('fs');
const lines = fs.readFileSync('input/day1', { encoding: 'utf-8' }).split('\r\n').map(x => +x);

let result = 0;

for (let i = 0; i < lines.length; i++) {
  for (let j = i + 1; j < lines.length; j++) {
    if ((lines[i] + lines[j]) === 2020) result = lines[i] * lines[j];
  }
}

console.log('part 1 - the answer is:', result);

result = 0;

for (let i = 0; i < lines.length; i++) {
  for (let j = i + 1; j < lines.length; j++) {
    for (let k = j + 1; k < lines.length; k++) {
      if ((lines[i] + lines[j] + lines[k]) === 2020) result = lines[i] * lines[j] * lines[k];
    }
  }
}

console.log('part 2 - the answer is:', result);