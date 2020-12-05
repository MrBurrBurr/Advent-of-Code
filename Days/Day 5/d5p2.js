const fs = require('fs');
const lines = fs.readFileSync('input', {encoding: 'utf-8'}).split('\r\n');

function resolveBsp(input, size, wayA, wayB) {
    const chars = [...input];
    let result = [...Array(size).keys()]

    for (let i = 0; i<chars.length; i++) {
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

const currentIds = boardingPasses.map(pass => pass.id);

const maxPossibleIds = 1031;
let missingIds = new Set([...Array(maxPossibleIds).keys()]);
for (let key in boardingPasses) {
    const id = boardingPasses[key].id;
    if (missingIds.has(id)) missingIds.delete(id);
}

let missingWithNeighbors = new Set();
missingIds.forEach(id => {
    const hasPlusId = currentIds.findIndex(num => num === id+1);
    const hasMinusId = currentIds.findIndex(num => num === id-1);
    if (hasPlusId !== -1 && hasMinusId !== -1) missingWithNeighbors.add(id);
});

const result = [...missingWithNeighbors].join(' ');

console.log('the answer is:', result);