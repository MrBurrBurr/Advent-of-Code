
const fs = require('fs');
fs.readFile('input', (err, data) => work(data.toString().split("\r\n")));

function work(array) {
    //repeat x10 to the right
    for(i=0; i<array.length; i++) {
        for(j=0; j<10; j++) {
            array[i] += array[i];
        }
    }

    const s11 = trees(array, 1);
    const s31 = trees(array, 3);
    const s51 = trees(array, 5);
    const s71 = trees(array, 7);
    const s12 = trees(array, 1, 2);
    const answer = s11 * s31 * s51 * s71 * s12;
    
    console.log('the answer is: ', answer);
}

function trees(array, slopeRight, slopeDown=1) {
    let base = slopeRight;
    let treeCount = 0;

    for(k=0; k<array.length; k++) {
        if (k<slopeDown) continue; // skip where we don't count trees
        const line = array[k];
        if (line[base] === '#') treeCount++;
        base += slopeRight;
        if (slopeDown === 2) k += 1;
    }

    return treeCount;
}
