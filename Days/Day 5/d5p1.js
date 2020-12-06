const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n');

function resolveBsp(input, size, wayA, wayB) {
    const chars = [...input];
    let result = [...Array(size).keys()]

    chars.forEach(char => {
        const len = result.length;
        const half = result.length / 2;
        if (char === wayA) result = result.splice(0, half);
        else if (char === wayB) result = result.splice(half, len);
    });

    return parseInt(result);
}

const seats = lines.map(line => {
    const row = resolveBsp(line.substr(0, 7), 128, 'F', 'B');
    const column = resolveBsp(line.substr(7, 9), 8, 'L', 'R');
    const id = row * 8 + column;
    return { row, column, id };
});

const ids = seats.map(bp => bp.id);
const highestId = Math.max(...ids);

console.log('the answer is: ' + highestId);
