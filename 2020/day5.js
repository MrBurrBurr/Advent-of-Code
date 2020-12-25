const fs = require('fs');
const lines = fs.readFileSync('input/day5', { encoding: 'utf-8' }).split('\r\n');

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

console.log('part 1 - the answer is: ' + highestId);

const currentIds = seats.map(pass => pass.id);

const maxPossibleIds = 1031;
let allMissingIds = new Set([...Array(maxPossibleIds).keys()]);
for (let key in seats) {
    const id = seats[key].id;
    if (allMissingIds.has(id)) allMissingIds.delete(id);
}

let missingIdsWithNeighbors = new Set();
allMissingIds.forEach(id => {
    const hasPlusNeighbor = currentIds.findIndex(num => num === id + 1);
    const hasMinusNeighbor = currentIds.findIndex(num => num === id - 1);
    if (hasPlusNeighbor !== -1 && hasMinusNeighbor !== -1) missingIdsWithNeighbors.add(id);
});

const result = [...missingIdsWithNeighbors].join(' ');

console.log('part 2 - the answer is:', result);
