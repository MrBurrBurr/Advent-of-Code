const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n');

function trees(lines, slopeRight, slopeDown = 1) {
    let base = slopeRight;
    let treeCount = 0;

    for (let i = 0; i < lines.length; i++) {
        if (i < slopeDown) continue; // skip where we don't count trees
        const line = lines[i];
        if (line[base] === '#') treeCount++;
        base += slopeRight;
        if (slopeDown === 2) i += 1;
    }

    return treeCount;
}

const expanded = lines.map(line => line.repeat(100));
const s11 = trees(expanded, 1);
const s31 = trees(expanded, 3);
const s51 = trees(expanded, 5);
const s71 = trees(expanded, 7);
const s12 = trees(expanded, 1, 2);
const answer = s11 * s31 * s51 * s71 * s12;

console.log('the answer is:', answer);