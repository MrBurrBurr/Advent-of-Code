
const fs = require('fs');
fs.readFile('input', (err, data) => solve(data.toString().split("\r\n")));

function solve(array) {
    //repeat x10 to the right
    for(i=0; i<array.length; i++) {
        for(j=0; j<10; j++) {
            array[i] += array[i];
        }
    }

    let treeCount = 0;
    let base = 3;

    for(k=0; k<array.length; k++) {
        if (k===0) continue; // we can skip the first line
        const line = array[k];
        if (line[base] === '#') treeCount++;
        base += 3;
    }

    console.log('the answer is: ', treeCount);
}
