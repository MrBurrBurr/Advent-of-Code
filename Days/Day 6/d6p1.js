const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\n\r');

let totalSum = 0;

lines.forEach(line => {
    line = line.replace(/\n/g, '').trim();
    const groups = line.split('\r');
    const yesCount = new Set();

    groups.forEach(group => {
        [...group].forEach(char => {
            if (!yesCount.has(char)) yesCount.add(char);
        });
    });
    
    totalSum += yesCount.size;
});

console.log('the answer is: ' + totalSum);
