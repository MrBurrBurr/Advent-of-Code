const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n');

function resolveBsp(input, size, wayA, wayB) {
    const chars = [...input];
    let result = [...Array(size).keys()]

    for (let i = 0; i < chars.length; i++) {
        const len = result.length;
        const half = result.length / 2;
        if (chars[i] === wayA) result = result.splice(0, half);
        else if (chars[i] === wayB) result = result.splice(half, len);
    }

    return parseInt(result);
}

function getId(row, column) {
    const result = parseInt(row) * 8 + parseInt(column);
    return result;
}

const boardingPasses = lines.map(line => {
    const row = resolveBsp(line.substr(0, 7), 128, 'F', 'B');
    const column = resolveBsp(line.substr(7, 9), 8, 'L', 'R');
    const id = getId(row, column);
    return { row, column, id };
});

let highestId = 0;
for (let key in boardingPasses) {
    const pass = boardingPasses[key];
    if (pass.id > highestId) highestId = pass.id;
}

console.log('the answer is: ' + highestId);
