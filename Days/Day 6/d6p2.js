const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\n\r');

let result = 0;

lines.forEach(line => {
    line = line.replace(/\n/g, '').trim();
    const groups = line.split('\r');
    const yesCount = new Set();
    const wholeGroup = groups.join('');

    [...wholeGroup].forEach(char => {
        const charCount = wholeGroup.split(char).length - 1;
        if (charCount === groups.length) yesCount.add(char);
    });

    result += yesCount.size;
});

console.log('the answer is: ' + result);
