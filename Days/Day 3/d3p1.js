const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n');

const expanded = lines.map(line => line.repeat(100));
let treeCount = 0;
let base = 0;

expanded.forEach(line => {
    if (line[base] === '#') treeCount++;
    base += 3;
});

console.log('the answer is:', treeCount);
